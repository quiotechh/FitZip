import { notFound } from "next/navigation";
import ProductDetail, { ProductData } from "@/components/product-detail";
import dbConnect from "@/lib/db";
import Product from "@/model/Product";
import { PRODUCT_CONTENT } from "@/lib/product-content";

interface PopulatedProduct {
  _id: unknown;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  upsellDiscount: number | null;
  upsellProducts: {
    _id: unknown;
    slug: string;
    name: string;
    price: number;
    image: string;
    category: string;
  } | null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await dbConnect();
  const dbProduct = (await Product.findOne({ slug })
    .populate("upsellProducts")
    .lean()) as PopulatedProduct | null;

  // Product not in DB → 404
  if (!dbProduct) notFound();

  // Marketing copy not configured → 404
  const content = PRODUCT_CONTENT[slug];
  if (!content) notFound();

  const upsell = dbProduct.upsellProducts;
  const upsellOffer =
    upsell && dbProduct.upsellDiscount != null
      ? {
          productId: String(upsell._id),
          slug: upsell.slug,
          name: upsell.name,
          subtitle: PRODUCT_CONTENT[upsell.slug]?.subtitle ?? "",
          price: parseFloat(
            (upsell.price * (1 - dbProduct.upsellDiscount / 100)).toFixed(2),
          ),
          originalPrice: upsell.price,
          image: upsell.image,
        }
      : undefined;

  const product: ProductData = {
    _id: String(dbProduct._id),
    slug,
    name: dbProduct.name,
    subtitle: content.subtitle,
    tag: content.tag,
    tagColor: content.tagColor,
    price: dbProduct.price,
    originalPrice: content.originalPrice,
    image: dbProduct.image,
    upsellOffer,
    headline: content.headline,
    bullets: content.bullets,
    whatYouGet: content.whatYouGet,
    faqs: content.faqs,
    reviews: content.reviews,
    recommended: upsell
      ? {
          slug: upsell.slug,
          name: upsell.name,
          subtitle: PRODUCT_CONTENT[upsell.slug]?.subtitle ?? "",
          price: upsell.price,
          originalPrice:
            PRODUCT_CONTENT[upsell.slug]?.originalPrice ?? upsell.price,
          image: upsell.image,
        }
      : {
          slug: "",
          name: "",
          subtitle: "",
          price: 0,
          originalPrice: 0,
          image: "",
        },
  };

  return <ProductDetail product={product} />;
}
