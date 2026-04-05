// this is for fetching specific product from its unique id

import { NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/model/Product";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  //error handling
  try {
    await dbConnect();

    
    const { id } = await params;
    const product = await Product.findById(id);

    if (!product) {
      return Response.json(
        { success: false, error: "Product not found" },
        { status: 400 },
      );
    }

    return Response.json({ success: true, data: product });
  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to fetch product" },
      { status: 500 },
    );
  }
}
