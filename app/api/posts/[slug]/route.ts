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
