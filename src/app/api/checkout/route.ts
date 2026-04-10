import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/db";
import stripe from "@/lib/stripe";
import Product from "@/model/Product";
import Order from "@/model/Order";

export async function POST(request: NextRequest) {
  try {
    const { email, items } = await request.json();

    // Validate input
    if (!email || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: email and items are required" },
        { status: 400 },
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 },
      );
    }

    await dbConnect();

    // Fetch products and build line items
    const lineItems: object[] = [];
    const orderData: Array<{
      productId: string;
      price: number;
      isUpsell: boolean;
      upsellProductId?: string;
      email: string;
    }> = [];

    for (const item of items) {
      if (!mongoose.isValidObjectId(item.productId)) {
        return NextResponse.json(
          { error: `Invalid product ID: ${item.productId}` },
          { status: 400 },
        );
      }

      const product = await Product.findById(item.productId);
      if (!product) {
        return NextResponse.json(
          { error: `Product ${item.productId} not found` },
          { status: 404 },
        );
      }

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
            // images: product.image ? [product.image] : undefined,  stripe doesn't allow localhost URLs for images
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      });

      orderData.push({
        productId: product._id.toString(),
        price: product.price,
        isUpsell: item.isUpsell || false,
        upsellProductId: item.upsellProductId,
        email: email,
      });
    }

    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: "No valid products in cart" },
        { status: 400 },
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/products`,
      customer_email: email,
      metadata: {
        email: email,
        itemCount: items.length.toString(),
      },
    });

    // Create Order records with pending status
    await Promise.all(
      orderData.map((data) =>
        Order.create({
          user: null,
          email: data.email,
          product: data.productId,
          amount: data.price,
          paymentStatus: "pending",
          stripeSessionId: session.id,
          isUpsell: data.isUpsell,
          upsellProduct: data.upsellProductId || null,
        }),
      ),
    );

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
