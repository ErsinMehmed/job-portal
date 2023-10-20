import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
  {
    name: String,
    faculty: String,
    department: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);

export default Teacher;
