import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.models.Role || mongoose.model("Role", roleSchema);

export default Role;
