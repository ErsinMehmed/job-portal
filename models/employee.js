import mongoose, { Schema } from "mongoose";
import Group from "./group";

const employeeSchema = new Schema(
  {
    name: String,
    personal_number: String,
    birthday: Date,
    city: String,
    email: String,
    password: String,
    group: { type: Schema.Types.ObjectId, ref: "Group" },
  },
  {
    timestamps: true,
  }
);

const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;
