import BlogCard from "@/app/ui/blog/BlogCard";

const posts = [
  {
    slug: "first-post",
    title: "My First Post",
    date: "Nov 8, 2025",
    excerpt: "This is a short summary of my first blog post built with Next.js and Tailwind CSS.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCBQAq4fDkjizcfZGBW_6ir3gL4Kd8b_3fA&s",
  },
  {
    slug: "second-post",
    title: "Learning React and TypeScript",
    date: "Nov 5, 2025",
    excerpt: "How I started learning React and TypeScript and built my first projects.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
  {
    slug: "second-post",
    title: "Learning React and TypeScript",
    date: "Nov 5, 2025",
    excerpt: "How I started learning React and TypeScript and built my first projects.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
  {
    slug: "second-post",
    title: "Learning React and TypeScript",
    date: "Nov 5, 2025",
    excerpt: "How I started learning React and TypeScript and built my first projects.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
  {
    slug: "second-post",
    title: "Learning React and TypeScript",
    date: "Nov 5, 2025",
    excerpt: "How I started learning React and TypeScript and built my first projects.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
  {
    slug: "second-post",
    title: "Learning React and TypeScript",
    date: "Nov 5, 2025",
    excerpt: "How I started learning React and TypeScript and built my first projects.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
  {
    slug: "second-post",
    title: "Learning React and TypeScript",
    date: "Nov 5, 2025",
    excerpt: "How I started learning React and TypeScript and built my first projects.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
  {
    slug: "second-post",
    title: "Learning React and TypeScript",
    date: "Nov 5, 2025",
    excerpt: "How I started learning React and TypeScript and built my first projects.",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold text-white">My Blog</h1>
        <p className="text-white mt-2">Thoughts, tutorials, and coding stories.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 w-full max-w-4xl">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
