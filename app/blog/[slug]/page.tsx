import Link from "next/link";
import Image from "next/image";
import type { BlogCardProps } from "../../../types/blog";

interface BlogPostPageProps {
  params: { slug: string } | Promise<{ slug: string }>;
  searchParams?: any;
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  // Unwrap params
  const { slug: encodedSlug } = await props.params;
  const slug = decodeURIComponent(encodedSlug); // <-- decode URL-encoded slug

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch posts");

    const posts: BlogCardProps[] = await res.json();

    // Find post by slug (exact match)
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center text-red-500">
          Post not found
        </div>
      );
    }

    // Determine text direction for RTL/LTR
    const isRtl = (text: string) => /[\u0600-\u06FF]/.test(text);
    const dir = isRtl(post.title + post.excerpt) ? "rtl" : "ltr";

    return (
      <main
        dir={dir}
        className="min-h-screen w-full bg-transparent flex flex-col items-center py-16 px-6"
      >
        <article className="max-w-3xl w-full bg-white rounded-xl shadow p-8">
          <Link href="/blog" className="text-blue-600 text-sm hover:underline">
            &larr; Back to blog
          </Link>

          {post.thumbnail && (
            <div className="my-4">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl font-bold text-slate-900 mt-4">{post.title}</h1>
          <p className="text-slate-400 text-sm mt-1">
            {new Date(post.date).toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="prose prose-slate mt-6">
            <p>{post.excerpt}</p>
          </div>
        </article>
      </main>
    );
  } catch (err) {
    console.error(err);
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load post
      </div>
    );
  }
}
