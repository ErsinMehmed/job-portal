import mongoose, { Schema } from "mongoose";
import Role from "./role.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    personal_number: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    company_size: String,
    vat_number: String,
    phone_number: String,
    role: { type: Schema.Types.ObjectId, ref: "Role" },
    company_created: Date,
    company_description: String,
    birthday: Date,
    city: String,
    email: {
      type: String,
      minlength: 3,
      maxlength: 100,
    },
    password: {
      type: String,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
