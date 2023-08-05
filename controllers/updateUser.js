const User = require("../models/User");

const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  bcrypt.hash(req.body.licenceNumber, 5, (err, hash) => {
    User.findOneAndUpdate(
      {
        username: loggInUser.username,
      },
      {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        licenceNumber: hash,
        age: req.body.age,
        dob: req.body.dob,
        carDetails: {
          make: req.body.make,
          year: req.body.year,
          model: req.body.model,
          platnumber: req.body.platName,
        },
      },
      (err, result) => {
        if (err) {
          console.log("unsuccessful", err);
        } else {
          console.log("successful", result);
          res.redirect("/dashboard");
        }
      }
    );
  });
};
