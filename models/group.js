import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema(
  {
    name: String,
    number: Number,
    course: Number,
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.models.Group || mongoose.model("Group", groupSchema);

export default Group;
