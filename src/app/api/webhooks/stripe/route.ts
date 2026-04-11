import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import stripe from "@/lib/stripe";
import Order from "@/model/Order";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!webhookSecret) {
  console.warn("STRIPE_WEBHOOK_SECRET is not defined");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!webhookSecret || !signature) {
      return NextResponse.json(
        { error: "Webhook secret or signature missing" },
        { status: 400 },
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (error) {
      console.error("Webhook signature verification failed:", error);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    await dbConnect();

    // Handle checkout.session.completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Update all orders with this session ID to completed
      const result = await Order.updateMany(
        { stripeSessionId: session.id },
        {
          paymentStatus: "completed",
          // Set downloadUrl based on product (can be enhanced with actual file URLs)
        },
      );

      console.log(
        `Updated ${result.modifiedCount} orders for session ${session.id}`,
      );
    }

    // Handle charge.failed
    if (event.type === "charge.failed") {
      const charge = event.data.object as Stripe.Charge;
      if (charge.payment_intent) {
        // You can handle failed payments here if needed
        console.log(`Payment failed for charge: ${charge.id}`);
      }
    }

    // Handle checkout.session.expired - mark orders as failed
    if (event.type === "checkout.session.expired") {
      const session = event.data.object as Stripe.Checkout.Session;
      await Order.updateMany(
        { stripeSessionId: session.id },
        { paymentStatus: "failed" },
      );
    }

    // Handle payment_intent.payment_failed
    // if (event.type === "payment_intent.payment_failed") {
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   // Update orders to failed status
    //   await Order.updateMany(
    //     { stripeSessionId: paymentIntent.client_secret },
    //     { paymentStatus: "failed" },
    //   );
    //   console.log(`Payment failed for intent: ${paymentIntent.id}`);
    // }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 },
    );
  }
}
