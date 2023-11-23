import mongoose, { Schema } from "mongoose";
import User from "./user.js";

const adSchema = new Schema(
  {
    title: String,
    location: String,
    position: String,
    employment_type: String,
    summary: String,
    field: String,
    experience: String,
    details: String,
    salary: Number,
    expired: Date,
    keywords: { type: [String] },
    languages: { type: [String] },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Ad = mongoose.models.Ad || mongoose.model("Ad", adSchema);

export default Ad;
