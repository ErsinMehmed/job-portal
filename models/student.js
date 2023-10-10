import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: String,
    birthday: Date,
    faculty_number: Number,
    faculty: String,
    email: String,
    password: String,
    group_id: Number,
  },
  {
    timestamps: true,
  }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
