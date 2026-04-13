import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId | null;
  email: string;
  product: mongoose.Types.ObjectId;
  amount: number;
  paymentStatus: "pending" | "completed" | "failed";
  stripeSessionId: string;
  downloadFileName: string | null;
  isUpsell: boolean;
  upsellProduct: mongoose.Types.ObjectId | null;
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    stripeSessionId: {
      type: String,
      required: [true, "Stripe session ID is required"],
      unique: true,
    },
    downloadFileName: {
      type: String,
      default: null,
    },
    isUpsell: {
      type: Boolean,
      default: false,
    },
    upsellProduct: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      default: null,
    },
  },
  { timestamps: true },
);

const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
