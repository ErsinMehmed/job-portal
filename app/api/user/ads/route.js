import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const perPage = request.nextUrl.searchParams.get("per_page") || 10;
  const searchText = request.nextUrl.searchParams.get("search");
  const dateFrom = request.nextUrl.searchParams.get("date_from");
  const dateTo = request.nextUrl.searchParams.get("date_to");
  const status = request.nextUrl.searchParams.get("status");
  const field = request.nextUrl.searchParams.get("field");
  const employmentType = request.nextUrl.searchParams.get("employment_type");
  const minSalary = request.nextUrl.searchParams.get("min_salary");
  const maxSalary = request.nextUrl.searchParams.get("max_salary");

  await connectMongoDB();

  const session = await getServerSession(authOptions);

  const queryBuilder = Ad.find().populate({
    path: "creator",
    select: "name",
  });

  if (session) {
    queryBuilder.where("creator").equals(session.user.id);
  } else {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  if (searchText?.length > 2) {
    queryBuilder.or([
      { title: new RegExp(searchText, "i") },
      { location: new RegExp(searchText, "i") },
      { position: new RegExp(searchText, "i") },
    ]);
  }

  if (dateFrom) {
    queryBuilder.where("createdAt").gte(new Date(dateFrom));
  }

  if (dateTo) {
    queryBuilder.where("createdAt").lt(new Date(dateTo));
  }

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  if (status === "active") {
    queryBuilder.where("expired").gte(oneMonthAgo);
  } else if (status === "expired") {
    queryBuilder.where("expired").lt(oneMonthAgo);
  }

  if (field) {
    queryBuilder.where("field").equals(field);
  }

  if (employmentType) {
    queryBuilder.where("employment_type").equals(employmentType);
  }

  if (minSalary) {
    queryBuilder.where("salary").gte(parseInt(minSalary));
  }

  if (maxSalary) {
    queryBuilder.where("salary").lte(parseInt(maxSalary));
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
