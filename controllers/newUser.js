const User = require("../models/User");

module.exports = async (req, res) => {
  if (req.body.password != req.body.confirmPassword) {
    res.redirect("/login");
  } else {
    await User.create(
      {
        username: req.body.userName,
        password: req.body.confirmPassword,
        usertype: req.body.userType,
      },
      (err, result) => {
        if (err) {
          console.log("unsuccessful", err);
        } else {
          console.log("successful", result);
          res.redirect("/G_licence");
        }
      }
    );
  }
};
