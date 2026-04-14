import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
  fileName: string;
  slug: string;
  category: "nutrition" | "workout";
  upsellProducts: mongoose.Types.ObjectId | null;
  upsellDiscount: number | null;
  createdAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Product name is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    image: { type: String, required: [true, "Product image URL is required"] },
    fileName: {
      type: String,
      required: [true, "Product file name is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
    },
    category: { type: String, enum: ["nutrition", "workout"] },
    upsellProducts: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      default: null,
    },
    upsellDiscount: {
      type: Number,
      min: [0, "Discount cannot be negative"],
      max: [100, "Discount cannot exceed 100%"],
      default: null,
    },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
