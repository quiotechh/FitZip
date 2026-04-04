import Hero from "@/components/hero";
import ProductsSection from "@/components/products-section";
import YoutubeSection from "@/components/youtube-section";
import TestimonialsSection from "@/components/testimonials-section";
import OurStorySection from "@/components/our-story-section";
import BlogsSection from "@/components/blogs-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <YoutubeSection />
      <TestimonialsSection />
      <OurStorySection />
      <BlogsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
