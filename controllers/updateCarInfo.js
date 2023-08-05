const User = require("../models/User");

module.exports = (req, res) => {
  User.findOneAndUpdate(
    {
      licenceNumber: req.params.licenceNo,
    },
    {
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
};
