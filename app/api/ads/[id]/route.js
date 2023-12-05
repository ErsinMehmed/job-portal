import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  const ad = await Ad.findOne({ _id: id }).populate({
    path: "creator",
    select: "name company_size",
  });

  return NextResponse.json(ad);
}
