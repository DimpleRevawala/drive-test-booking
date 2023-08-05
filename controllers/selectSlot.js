const Appointment = require("../models/Appointment");
const User = require("../models/User");

module.exports = async (req, res) => {
  await Appointment.findOneAndUpdate(
    {
      _id: req.body.slots,
    },
    {
      isAppointmentAvailable: false,
    },
    {
      new: true,
    }
  ).then(async () => {
    await User.findOneAndUpdate(
      {
        _id: loggInUser._id,
      },
      {
        appointmentID: req.body.slots,
      },
      {
        new: true,
      }
    ).then(res.redirect("/"));
  });
};
