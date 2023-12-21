import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";

let lastFetchedPage = 0;

export async function GET(request) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const filter = request.nextUrl.searchParams.get("filter");
  const pageSize = 10;

  if (filter) {
    lastFetchedPage = 0;
  }

  //   if (page <= lastFetchedPage) {
  //     return NextResponse.json({ error: "Invalid page request." });
  //   }

  await connectMongoDB();

  const skip = (page - 1) * pageSize;

  const queryBuilder = Ad.find().select(
    "title location position employment_type salary experience employment category"
  );

  const ads = await Ad.find(queryBuilder).skip(skip).limit(pageSize);

  lastFetchedPage = page;

  return NextResponse.json(ads);
}
