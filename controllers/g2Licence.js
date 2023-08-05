const Appointment = require("../models/Appointment");

module.exports = async (req, res) => {
  let currentDate = new Date().toLocaleDateString();

  const todayDate = new Date(currentDate);
  const formatCurrentDate =
    todayDate.getFullYear() +
    "-" +
    (todayDate.getMonth() + 1) +
    "-" +
    todayDate.getDate();

  const finalDate = req.query.appointment_date
    ? req.query.appointment_date
    : currentDate;

  const appointment_list = await Appointment.find({
    date: finalDate,
    isAppointmentAvailable: true,
  });

  res.render("G2_licence", {
    date: finalDate,
    appointment_list,
  });
};
