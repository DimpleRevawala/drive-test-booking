const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    default: "",
  },
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  licenceNumber: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: "",
  },
  dob: {
    type: String,
    default: "",
  },
  carDetails: {
    make: {
      type: String,
      default: "",
    },
    year: {
      type: Number,
      default: "",
    },
    model: {
      type: String,
      default: "",
    },
    platnumber: {
      type: Number,
      default: "",
    },
  },
  appointmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
  },
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 5, (err, hash) => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
