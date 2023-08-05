const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  date: Date,
  time: String,
  isAppointmentAvailable: {
    type: Boolean,
    default: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
