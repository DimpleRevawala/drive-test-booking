const adminAuth = (req, res, next) => {
  if (loggInUser) {
    if (loggInUser.usertype == "admin") {
      return next();
    }
  }
  return res.redirect("/");
};

const driverAuth = (req, res, next) => {
  if (loggInUser) {
    if (loggInUser.usertype == "driver") {
      return next();
    }
  }

  return res.redirect("/");
};

module.exports = {
  adminAuth,
  driverAuth,
};
