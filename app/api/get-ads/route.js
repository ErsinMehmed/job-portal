import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";

export async function GET(request) {
  const page = parseInt(request.nextUrl.searchParams.get("page")) || 1;
  const generalSearch = request.nextUrl.searchParams.get("keyword");
  const pageSize = 10;

  await connectMongoDB();

  let totalAds, totalPages, currentPage, skip;

  const regex = new RegExp(generalSearch, "i");

  totalAds = await Ad.countDocuments(
    generalSearch
      ? {
          $or: [{ title: { $regex: regex } }, { keywords: { $in: [regex] } }],
        }
      : {}
  );

  totalPages = Math.ceil(totalAds / pageSize);
  currentPage = Math.min(page, totalPages);
  skip = (currentPage - 1) * pageSize;

  const queryBuilder = Ad.find(
    generalSearch
      ? {
          $or: [{ title: { $regex: regex } }, { keywords: { $in: [regex] } }],
        }
      : {}
  )
    .populate({
      path: "creator",
      select: "name",
    })
    .select(
      "title location position employment_type salary experience employment category"
    );

  const ads = await Ad.find(queryBuilder).skip(skip).limit(pageSize);

  return NextResponse.json({ totalPages, totalAds, ads });
}
