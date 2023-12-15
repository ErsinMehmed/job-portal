import mongoose, { Schema } from "mongoose";
import User from "./user.js";

const adSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
    location: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    position: {
      type: String,
      required: true,
      maxlength: 50,
    },
    employment: {
      type: String,
      required: true,
    },
    employment_type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
      maxlength: 600,
    },
    salary: {
      type: Number,
      min: 1,
    },
    expired: {
      type: Date,
      // validate: {
      //   validator: function (value) {
      //     return value > new Date();
      //   },
      //   message: "Expired date must be in the future.",
      // },
    },
    remote_work: Boolean,
    paid_leave: {
      type: Number,
      required: true,
      min: 1,
      max: 40,
    },
    education_requirements: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    skill_section_order: {
      type: Number,
      required: true,
    },
    soft_skills: {
      type: [String],
      required: true,
    },
    keywords: {
      type: [String],
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    job_benefits: {
      type: [String],
      required: true,
    },
    job_benefit_section_order: {
      type: Number,
      required: true,
    },
    qualifications: {
      type: [String],
      required: true,
    },
    qualification_section_order: {
      type: Number,
      required: true,
    },
    apply_button_color: {
      type: String,
      required: true,
    },
    badge_color: {
      type: String,
      required: true,
    },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Ad = mongoose.models.Ad || mongoose.model("Ad", adSchema);

export default Ad;
