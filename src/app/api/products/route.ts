// for fetching all products and category wise products

import dbConnect from "@/lib/db";
import { NextRequest } from "next/server";
import Product from "@/model/Product";

// GET /api/products
// GET /api/products?category=workout
export async function GET(request: NextRequest) {
  // error handling
  try {
    // function from db.ts , caching already included
    await dbConnect();

    const category = request.nextUrl.searchParams.get("category");

    const filter = category ? { category } : {};

    const products = await Product.find(filter);

    return Response.json({ success: true, data: products });
  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
