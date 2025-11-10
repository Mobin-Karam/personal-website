"use client";

import { useState } from "react";
import { BlogCardProps } from "@/src/types/blog";

export default function NewPostPage() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [content, setContent] = useState(""); // optional: could be same as excerpt

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Create post object matching BlogCardProps
        const newPost: Omit<BlogCardProps, "date"> = {
            title,
            slug,
            excerpt,
            thumbnail: thumbnail || undefined,
        };

        try {
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPost),
            });

            if (res.ok) {
                alert("✅ Post saved!");
                // Reset form
                setTitle("");
                setSlug("");
                setExcerpt("");
                setThumbnail("");
                setContent("");
            } else {
                alert("❌ Error saving post");
            }
        } catch (err) {
            console.error(err);
            alert("❌ Error saving post");
        }
    };

    return (
        <div className="max-h-screen bg-white w-full p-10">
            <div className=" mx-auto bg-white p-8 shadow rounded-lg">
                <h1 className="text-2xl font-bold mb-6">Write a New Post</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Post title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Post slug (e.g., my-first-post)"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />

                    <textarea
                        placeholder="Post excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="border rounded w-full px-3 py-2 h-24"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Thumbnail URL (optional)"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Save Post
                    </button>
                </form>
            </div>
        </div>
    );
}
