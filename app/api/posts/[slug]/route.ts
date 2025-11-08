import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { BlogCardProps } from "@/types/blog";

const postsFile = path.join(process.cwd(), "data", "posts.json");

export async function DELETE(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params; // Next.js automatically decodes URL
  if (!slug) {
    return NextResponse.json(
      { error: "Slug parameter missing" },
      { status: 400 }
    );
  }

  // read posts.json
  const posts: BlogCardProps[] = JSON.parse(
    fs.readFileSync(postsFile, "utf-8")
  );

  const index = posts.findIndex((p) => p.slug === slug); // must match exactly
  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  posts.splice(index, 1);
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2), "utf-8");

  return NextResponse.json({ message: "Post deleted successfully" });
}
// PUT (update) post
export async function PUT(
  request: Request,
  context: { params: Promise<{ slug: string }> } // slug is a promise
) {
  const { slug } = await context.params; // unwrap promise
  if (!slug) {
    return NextResponse.json(
      { error: "Slug parameter missing" },
      { status: 400 }
    );
  }

  const payload: UpdatePostPayload = await request.json();
  if (!payload.title || !payload.excerpt) {
    return NextResponse.json(
      { error: "Title and excerpt are required" },
      { status: 400 }
    );
  }

  // Read posts.json
  const posts: BlogCardProps[] = JSON.parse(
    fs.readFileSync(postsFile, "utf-8")
  );

  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // Update post
  posts[index] = { ...posts[index], ...payload };
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2), "utf-8");

  return NextResponse.json(posts[index]);
}
// Helper to read posts from JSON
const readPosts = (): BlogCardProps[] => {
  if (!fs.existsSync(postsFilePath)) return [];
  const fileData = fs.readFileSync(postsFilePath, "utf-8");
  try {
    return JSON.parse(fileData) as BlogCardProps[];
  } catch (err) {
    console.error("Failed to parse posts.json:", err);
    return [];
  }
};

// Helper to write posts to JSON
const writePosts = (posts: BlogCardProps[]): void => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), "utf-8");
};

interface UpdatePostPayload {
  title: string;
  excerpt: string;
  thumbnail?: string;
}

// GET single post (optional)
export async function GET(
  request: Request,
  { params }: { params?: { slug?: string } }
) {
  const slug = params?.slug ? decodeURIComponent(params.slug) : null;
  if (!slug) {
    return NextResponse.json(
      { error: "Slug parameter missing" },
      { status: 400 }
    );
  }

  const posts = readPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
