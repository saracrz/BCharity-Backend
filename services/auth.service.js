const jwt = require("jsonwebtoken");
const User = require("../models/users.model");

function authenticated(req, res, next) {
  const token = req.headers.access_token;
  if (!token) {
    return res.status(403).send("Aqui no entras sin token hulio");
  } else {
    jwt.verify(token, "secret", (error, data) => {
      if (error) {
        return res.status(403).send("Token no válido hulio");
      } else {
        const email = data.email;
        User.findOne({
          email: email
        }).then(user => {
          if (user == null) {
            return res.status(403).send("No hay usuario hulio");
          }
          req.reboot_user = user;
          next();
        });
      }
    });
  }
}


module.exports = {
  authenticated: authenticated
};
