import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema(
  {
    name: String,
    number: Number,
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.models.Group || mongoose.model("Group", groupSchema);

export default Group;
