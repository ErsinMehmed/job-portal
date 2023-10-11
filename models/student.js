import mongoose, { Schema } from "mongoose";
import Group from "./group";

const studentSchema = new Schema(
  {
    name: String,
    personal_number: String,
    birthday: Date,
    faculty_number: Number,
    faculty: String,
    email: String,
    password: String,
    group: { type: Schema.Types.ObjectId, ref: "Group" },
  },
  {
    timestamps: true,
  }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
