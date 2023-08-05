**#Drive Test Appointment Booking System**
The Drive Test Appointment Booking System is a web application designed to simulate some of the actions performed at a Drive Test Center. The system allows drivers to book G and G2 license drive test appointments at their preferred time slots, while examiners and admins manage the schedules and appointments.

**Features**<br/>
**Driver Interface:**
Drivers can log in and choose their preferred drive test time slot.<br/>
**Examiner Interface:**
Examiners can access and view the scheduled appointments.<br/>
Admin Interface: Admins can create and manage drive test appointment slots.<br/><br/>
**Technologies Used**
Node.js and Express for backend development.
MongoDB as the database to store user and appointment information.
Passport.js for user authentication and authorization.
HTML, CSS, and JavaScript for frontend development.
EJS (Embedded JavaScript) for server-side rendering of web pages.<br/><br/>
**Installation**
Clone the repository to your local machine:
bash
**Copy code**<br/>
git clone https://github.com/your-username/drive-test-booking.git
cd drive-test-booking<br/>
**Install dependencies:**
bash<br/>
**Copy code**
npm install<br/>
Configure the database connection by creating a .env file in the root directory and add the MongoDB connection URL:
makefile<br/>
Copy code
MONGODB_URI=your_mongodb_connection_uri<br/>
**Run the application:**
bash
**Copy code**<br/>
npm start
Access the application in your web browser at http://localhost:3000.

**How to Use**
Admin Interface:

Log in as an admin user.
Navigate to the "Appointment" section to add drive test appointment slots for different dates and times.
Once a time slot is added, it will be displayed on the "G2_page" where drivers can view available time slots.
Driver Interface:

Log in as a driver user.
On the "G2_page," choose a date from the calendar to view available drive test appointment slots for that date.
Select a time slot and book an appointment.
Examiner Interface:

Log in as an examiner user to view scheduled drive test appointments.
