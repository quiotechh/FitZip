import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/blog-post";
import { getBlogBySlug, BLOG_POSTS } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | FitZip Blog`,
    description: post.paragraphs[0],
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();
  return <BlogPostLayout post={post} />;
}
