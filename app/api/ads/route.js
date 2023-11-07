import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  await connectMongoDB();

  await Ad.create(data);

  return NextResponse.json({ message: "Ad Created" }, { status: 201 });
}

export async function GET(request) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const perPage = request.nextUrl.searchParams.get("per_page") || 10;
  const searchText = request.nextUrl.searchParams.get("search");

  await connectMongoDB();

  const queryBuilder = Ad.find().populate({
    path: "creator",
    select: "name",
  });

  if (searchText) {
    queryBuilder.or([
      { title: new RegExp(searchText, "i") },
      { location: new RegExp(searchText, "i") },
      { position: new RegExp(searchText, "i") },
    ]);
  }

  const totalAds = await Ad.find(queryBuilder).countDocuments();
  const ads = await queryBuilder.skip((page - 1) * perPage).limit(perPage);

  const pagination = {
    current_page: parseInt(page),
    total_pages: Math.ceil(totalAds / perPage),
    total_results: totalAds,
    per_page: parseInt(perPage),
  };

  return NextResponse.json({ ads, pagination });
}
