const UserModel = require("../models/users.model");
const PacientModel = require("../models/patients.model");
const VolunteerModel = require("../models/volunteers.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  signup,
  login
};

function signup(req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.user_password, 10);
  const userBody = {
    name: req.body.user_name,
    email: req.body.user_email,
    password: hashedPwd
  };

  UserModel.create(userBody)
    .then(newuser => {
      const userData = {
        username: req.body.user_name,
        email: req.body.user_email
      };

      const token = jwt.sign(
        userData,
        "secret", // TODO SECRET MORE SECRET PLEASE
        { expiresIn: "1w" }
      );

      return res.json({ token: token, user: newuser });
    })
    .catch(err => {
      res.status(403).json({ error: err });
    });
}

function login(req, res) {
  UserModel.findOne({ email: req.body.user_email })
    .then(user => {
      if (!user) {
        return res.json({ error: "wrong email" });
      }

      bcrypt.compare(req.body.user_password, user.password, (err, result) => {
        if (!result) {
          return res.json({
            error: `wrong password for ${req.body.user_email}`
          });
        }

        const userData = { username: user.name, email: user.email };

        const token = jwt.sign(
          userData,
          "secret", // TODO SECRET MORE SECRET PLEASE
          { expiresIn: "1d" }
        );

        if (user.role === "Paciente") {
          PacientModel.findOne({ userId: user._id }).then(pacientData => {
            return res.json({ token, user, pacientData });
          });
        } else if (user.role === "Voluntario") {
          VolunteerModel.findOne({ userId: user._id }).then(volunteerData => {
            return res.json({
              token,
              user,
              volunteerData
            });
          });
        } else {
          return res.json({ token: token, user });
        }
      });
    })
    .catch(err => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
