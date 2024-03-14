import express from "express";
import mongoose from "mongoose";
import { Teacher } from "./modals/modal.js";
import cors from "cors";

const app = express();
app.use(cors());

const db = () => {
  mongoose
    .connect("mongodb://localhost:27017/mohit")
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Not connected", err);
    });
};

app.use(express.json());

db();

app.post("/api/create-teacher", async (req, res) => {
  try {
    const {
      fullname,
      email,
      password,
      AcademinYear,
      department,
      title,
      contact,
    } = req.body;

    const teacher = await Teacher.create({
      fullname,
      email,
      password,
      AcademinYear,
      contact,
      department,
      title,
    });

    res.send(teacher);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/department", async (req, res) => {
  const { department } = req.body;
  console.log(department, req.body);

  const teachers = await Teacher.find({
    department: department,
  });

  console.log(teachers);
  res.status(200).json({
    teachers,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
