import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { BlogCardProps } from "@/src/types/blog";

const postsFile = path.join(process.cwd(), "data", "posts.json");

// GET all posts
export async function GET() {
  try {
    const fileData = fs.readFileSync(postsFile, "utf-8");
    const posts: BlogCardProps[] = JSON.parse(fileData);
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// POST a new post
export async function POST(req: Request) {
  try {
    const body: Partial<BlogCardProps> = await req.json();

    if (!body.slug || !body.title || !body.excerpt) {
      return NextResponse.json(
        { error: "slug, title, and excerpt are required" },
        { status: 400 }
      );
    }

    const fileData = fs.readFileSync(postsFile, "utf-8");
    const posts: BlogCardProps[] = JSON.parse(fileData);

    const newPost: BlogCardProps = {
      slug: body.slug,
      title: body.title,
      date: new Date().toISOString(),
      excerpt: body.excerpt,
      thumbnail: body.thumbnail,
    };

    posts.push(newPost);
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));

    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
