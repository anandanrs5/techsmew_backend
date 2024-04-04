const express = require("express");
const router = express.Router();
const Student = require("../../models/student");

router.post("/add", async (request, response) => {
  try {
    const { fullname, department, mark, location } = request.body;
    const employee = new Student({ fullname, department, mark, location });
    const savedEmployee = await employee.save();

    response.json({ message: "Student Created", savedEmployee });
  } catch (error) {
    response.json("Network error");
  }
});

router.get("/view", async (request, response) => {
  try {
    const fullEmployeeList = await Student.find();
    if (!fullEmployeeList) response.json("Student list not Found");
    response.json(fullEmployeeList);
  } catch (error) {
    response.json("Server Error");
  }
});

router.put("/edit/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { fullname, department, location, mark } = request.body;
    const updatedEmployee = await Student.findByIdAndUpdate(
      id,
      {
        fullname, department, location, mark
      },
      { new: true }
    );
    if (!updatedEmployee) response.json("Student not Found");
    response.json({ message: "Emplyee data Updated", updatedEmployee });
  } catch (error) {
    response.json("server Error");
  }
});

router.get("/view/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const getById = await Student.findById(id);
    if (!getById) response.json("Not Found");
    response.json(getById);
  } catch (error) {
    response.json("server Error");
  }
});

router.delete("/delete/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Student.findByIdAndDelete(id);
    if (!deleted) response.json("Not Found");
    response.json("Student Deleted");
  } catch (error) {
    response.json("server error");
  }
});

module.exports = router;
