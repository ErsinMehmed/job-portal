import mongoose, { Schema } from "mongoose";

const userRoleSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  role: { type: Schema.Types.ObjectId, ref: "Role" },
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

export default UserRole;
