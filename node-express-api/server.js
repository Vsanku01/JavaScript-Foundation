const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// Using CORS as MiddleWare
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Temporary Data Store
let Mentors = [];
let Students = [];

// Server
app.get("/data", (req, res) => {
  console.log("Path: ", req.path);
  res.json({
    Mentors: Mentors,
    students: Students,
  });
});

// Add mentor
app.post("/add-mentor", (req, res) => {
  let mentor = {
    id: "",
    name: "",
    students: [],
  };
  mentor.id = Mentors.length + 1;
  mentor.name = req.body.name.toLocaleLowerCase();
  mentor.students = [];
  Mentors.push(mentor);
  res.json({ message: `${mentor.name} added as Mentor` });
});

// Add Student
app.post("/add-student", (req, res) => {
  let student = {
    id: "",
    name: "",
    mentor: "",
  };
  student.id = Students.length + 1;
  student.name = req.body.name.toLocaleLowerCase();
  student.mentor = "";
  Students.push(student);
  res.json({ message: `${student.name} added as Student` });
});

// Update Mentor for student
app.post("/assign", (req, res) => {
  let mentorName = req.body.mentor.toLocaleLowerCase();
  let studentName = req.body.student.toLocaleLowerCase();

  let foundMentor = Mentors.find((mentor) => mentor.name === mentorName);
  foundMentor.students.push(studentName);

  let findStudent = Students.find((student) => student.name === studentName);
  findStudent.mentor = mentorName;
});

app.get("/data/:mentor", (req, res) => {
  let requestedMentor = req.params.mentor.toLocaleLowerCase();
  console.log(requestedMentor);
  let mentorDetails = Mentors.find((mentor) => mentor.name === requestedMentor);
  res.json(mentorDetails);
});

app.get("/update", (req, res) => {
  console.log("Updating");
  let options = [];
  Students.forEach((student) => {
    let name = student.name;
    options.push({ name: name });
  });

  res.json({ options: options });
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server Listening at PORT ${PORT}`);
});
