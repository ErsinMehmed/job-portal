import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();

  const randomAds = await Ad.aggregate([{ $sample: { size: 6 } }]).exec();

  return NextResponse.json(randomAds);
}
