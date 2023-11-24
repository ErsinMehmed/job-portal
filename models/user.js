import mongoose, { Schema } from "mongoose";
import Role from "./role.js";

const userSchema = new Schema(
  {
    name: String,
    personal_number: String,
    company_size: String,
    vat_number: String,
    phone_number: String,
    role: { type: Schema.Types.ObjectId, ref: "Role" },
    birthday: Date,
    city: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
