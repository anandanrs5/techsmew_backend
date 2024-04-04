const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullname: String,
  department: String,
  mark: Number,
  location: String
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
