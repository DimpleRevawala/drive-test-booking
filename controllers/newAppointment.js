const Appointment = require("../models/Appointment");

module.exports = async (req, res) => {
  await Appointment.create(
    {
      date: req.body.date,
      time: req.body.slot,
    },
    (err, result) => {
      if (err) {
        console.log("unsuccessful", err);
      } else {
        console.log("successful", result);
        res.redirect("/");
      }
    }
  );
};
