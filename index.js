const express = require("express");
const app = new express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const expressSession = require("express-session");

const dashboardController = require("./controllers/dashboard");
const gLicenceController = require("./controllers/gLicence");
const g2LicenceController = require("./controllers/g2Licence");
const loginController = require("./controllers/login");
const newUserController = require("./controllers/newUser");
const appointmentController = require("./controllers/appointment");
const updateCarInfoController = require("./controllers/updateCarInfo");
const signInController = require("./controllers/signIn");
const logoutController = require("./controllers/logout");
const updateUserController = require("./controllers/updateUser");
const newAppointmentController = require("./controllers/newAppointment");
const selectSlotController = require("./controllers/selectSlot");

const { adminAuth, driverAuth } = require("./middlewares/authMiddleware");

mongoose.connect(
  "mongodb+srv://dimple:admin@cluster0.hxn8wu1.mongodb.net/DriveTest"
);

global.loggInUser = null;

//middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(
  expressSession({
    secret: "DIMPLE",
  })
);
app.use("*", (req, res, next) => {
  loggInUser = req.session.USER;
  next();
});

app.set("view engine", "ejs");

// routes
app.get("/", dashboardController);
app.get("/G_licence", driverAuth, gLicenceController);
app.get("/G2_licence", driverAuth, g2LicenceController);
app.get("/dashboard", dashboardController);
app.get("/login", loginController);
app.get("/logout", logoutController);
app.get("/appointment", adminAuth, appointmentController);
app.post("/update/user", updateUserController);
app.post("/create/user", newUserController);
app.post("/user/update/:licenceNo", updateCarInfoController);
app.post("/create_appointment", newAppointmentController);
app.post("/select_slot", selectSlotController);

app.post("/user/login", signInController);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
