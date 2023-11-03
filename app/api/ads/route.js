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
  // const nameFilter = request.nextUrl.searchParams.get("name");
  // const personalNumberFilter =
  //   request.nextUrl.searchParams.get("personal_number");

  await connectMongoDB();

  const queryBuilder = Ad.find().populate({
    path: "creator",
    select: "name",
  });

  // if (nameFilter) {
  //   queryBuilder.where("name", new RegExp(nameFilter, "i"));
  // }

  // if (personalNumberFilter) {
  //   queryBuilder.where("personal_number", personalNumberFilter);
  // }

  const totalAds = await Ad.find(queryBuilder).countDocuments();
  const ads = await queryBuilder
    .skip((page - 1) * perPage)
    .limit(perPage)
    .select(
      "title location position employment_type field minimum_salary maximum_salary"
    );

  const pagination = {
    current_page: parseInt(page),
    total_pages: Math.ceil(totalAds / perPage),
    total_results: totalAds,
    per_page: parseInt(perPage),
  };

  return NextResponse.json({ ads, pagination });
}
