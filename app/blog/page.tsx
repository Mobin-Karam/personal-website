import { BlogCardProps } from "../../types/blog";
import BlogCard from "../../components/blog/BlogCard"


export default async function Blog() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
    if (!res.ok) throw new Error("Failed to fetch posts");

    const posts: BlogCardProps[] = await res.json();

    // Helper function to detect RTL text (simple heuristic)
    const isRtl = (text: string) => /[\u0600-\u06FF]/.test(text);

    return (
        <main className="max-h-screen w-full bg-transparent flex flex-col items-center py-16 px-6">
            <div className="max-w-4xl w-full text-center mb-12">
                <h1 className="text-4xl font-bold text-white">My Blog</h1>
                <p className="text-white mt-2">Thoughts, tutorials, and coding stories.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 w-full max-w-4xl">
                {posts.map((post: BlogCardProps) => {
                    const dir = isRtl(post.title + post.excerpt) ? "rtl" : "ltr";

                    return (
                        <div key={post.slug} dir={dir}>
                            <BlogCard {...post} />
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
