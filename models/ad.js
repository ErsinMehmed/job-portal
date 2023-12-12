import mongoose, { Schema } from "mongoose";
import User from "./user.js";

const adSchema = new Schema(
  {
    title: String,
    location: String,
    position: String,
    employment: String,
    employment_type: String,
    summary: String,
    category: String,
    experience: String,
    details: String,
    salary: Number,
    expired: Date,
    remote_work: Boolean,
    paid_leave: Number,
    education_requirements: String,
    skills: { type: [String] },
    skill_section_order: Number,
    soft_skills: { type: [String] },
    keywords: { type: [String] },
    languages: { type: [String] },
    job_benefits: { type: [String] },
    job_benefit_section_order: Number,
    qualifications: { type: [String] },
    qualification_section_order: Number,
    apply_button_color: String,
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Ad = mongoose.models.Ad || mongoose.model("Ad", adSchema);

export default Ad;
