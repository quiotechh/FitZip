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
    const slug = request.nextUrl.searchParams.get("slug");

    if (slug) {
      const product = await Product.findOne({ slug }).populate("upsellProducts");
      if (!product) return Response.json({ success: false, error: "Product not found" }, { status: 404 });
      const doc = product.toObject();
      delete doc.fileName;
      if (doc.upsellProducts) delete doc.upsellProducts.fileName;
      if (doc.upsellProducts && doc.upsellDiscount != null) {
        doc.upsellPrice = parseFloat(
          (doc.upsellProducts.price * (1 - doc.upsellDiscount / 100)).toFixed(2)
        );
      }
      return Response.json({ success: true, data: doc });
    }

    const filter: Record<string, string> = {};
    if (category) filter.category = category;

    const products = await Product.find(filter).populate("upsellProducts");

    const data = products.map((p) => {
      const doc = p.toObject();
      delete doc.fileName;
      if (doc.upsellProducts) delete doc.upsellProducts.fileName;
      if (doc.upsellProducts && doc.upsellDiscount != null) {
        doc.upsellPrice = parseFloat(
          (doc.upsellProducts.price * (1 - doc.upsellDiscount / 100)).toFixed(2)
        );
      }
      return doc;
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
