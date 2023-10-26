import mongoose, { Schema } from "mongoose";

const employeerSchema = new Schema(
  {
    name: String,
    vat_number: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Employeer =
  mongoose.models.Employeer || mongoose.model("Employeer", employeerSchema);

export default Employeer;
