import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  const ad = await Ad.findOne({ _id: id }).populate({
    path: "creator",
    select: "name company_size company_created company_description",
  });

  const adCount = await Ad.countDocuments({ creator: ad.creator._id });

  return NextResponse.json({ ad, adCount });
}
