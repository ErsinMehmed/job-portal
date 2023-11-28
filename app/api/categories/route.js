import connectMongoDB from "@/libs/mongodb";
import Ad from "@/models/ad";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  if (!Array.isArray(data)) {
    return NextResponse.json({ error: "Невалидни данни" });
  }

  await connectMongoDB();

  const categories = await Promise.all(
    data.map(async (category) => {
      const count = await Ad.countDocuments({ category });

      return { name: category, count };
    })
  );

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const totalAdsCount = await Ad.countDocuments({
    createdAt: { $gte: currentDate },
  });

  const overallAdsCount = await Ad.countDocuments();

  const response = { categories, totalAdsCount, overallAdsCount };

  return NextResponse.json(response);
}
