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

function me(req, res, next) {
  const elQueQuieresBorrar = req.params.id;
  const tu = req.reboot_user._id.toString();

  if (tu === elQueQuieresBorrar) {
    return next();
  } else {
    return res
      .status(403)
      .send("Estas loco? como vas a borrar a " + elQueQuieresBorrar);
  }
}

function validUser(req, res, next){
  const actualUser = req.reboot_user;
  const profileFinished = haveAllRequiredAttr(actualUser) ; 

  if (profileFinished) {
        return next();
      } else {
        return res.status(403).send("Debes completar tu información personal")
      }

}

function haveAllRequiredAttr(user) {
  if (!user.dni || user.dni.length < 8 ) return false;
  if (!user.role) return false;
  if (!user.name) return false;
  if (!user.email) return false;
  if (!user.password) return false;
  if (!user.apellido) return false;
  if (!user.apellido) return false;
  if (!patient.name) return false;
  if (!patient.description) return false;
  if (!volunteer.dias) return false;
  if (!volunteer.lugar) return false;
  if (!volunteer.horas) return false;
  if (!volunteer.description) return false;
  if (!volunteer.description) return false;
  else { return true }
  
}



module.exports = {
  authenticated: authenticated,
  me: me, 
  validUser: validUser
};
