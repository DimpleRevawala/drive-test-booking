const User = require("../models/User");

const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  User.findOne(
    {
      username: req.body.userName,
    },
    (err, result) => {
      if (err) {
        console.log("error", err);
      } else {
        if (result) {
          bcrypt.compare(req.body.password, result.password, (err, same) => {
            if (same) {
              req.session.USER = result;

              res.redirect("/");
            } else {
              res.redirect("/login");
            }
          });
        } else {
          res.redirect("/login");
        }
      }
    }
  );
};
