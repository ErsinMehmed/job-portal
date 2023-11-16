import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { StatusEnums } from "@/enums/status";

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
  const dateFrom = request.nextUrl.searchParams.get("date_from");
  const dateTo = request.nextUrl.searchParams.get("date_to");
  const status = request.nextUrl.searchParams.get("status");
  const field = request.nextUrl.searchParams.get("field");
  const employmentType = request.nextUrl.searchParams.get("employment_type");
  const minSalary = request.nextUrl.searchParams.get("min_salary");
  const maxSalary = request.nextUrl.searchParams.get("max_salary");

  const session = await getServerSession(authOptions);

  await connectMongoDB();

  const queryBuilder = Ad.find().populate({
    path: "creator",
    select: "name",
  });

  if (session && session?.user?.role === "Employer") {
    queryBuilder.where("creator").equals(session.user.id);
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

  if (status) {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    if (Number(status) === StatusEnums.ACTIVE) {
      queryBuilder.where("expired").lt(oneMonthAgo);
    } else if (Number(status) === StatusEnums.EXPIRED) {
      queryBuilder.where("expired").gte(oneMonthAgo);
    }
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
