import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  AcademinYear: String,
  department: String,
  title: String,
  fullname: String,
  contact: String,
  email: String,
  password: String,
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export { Teacher };
