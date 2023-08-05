const { createIndexes } = require("../models/User");
const User = require("../models/User");

module.exports = async (req, res) => {
  if (loggInUser.licenceNumber == "") {
    res.redirect("/G2_licence");
  } else {
    res.render("G_licence");
  }
};
