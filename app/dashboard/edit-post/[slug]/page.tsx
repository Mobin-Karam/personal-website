"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";
import type { BlogCardProps } from "@/types/blog";

interface EditPostPageProps {
    params: { slug: string } | Promise<{ slug: string }>;
}

interface UpdatePostPayload {
    title: string;
    excerpt: string;
    thumbnail?: string;
}

export default function EditPostPage(props: EditPostPageProps) {
    const router = useRouter();
    const [post, setPost] = useState<BlogCardProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [saving, setSaving] = useState<boolean>(false);

    // Form state
    const [title, setTitle] = useState<string>("");
    const [excerpt, setExcerpt] = useState<string>("");
    const [thumbnail, setThumbnail] = useState<string>("");

    // Load post by slug
    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);

            const { slug: encodedSlug } = await props.params;
            const slug: string = decodeURIComponent(encodedSlug);

            try {
                const res: Response = await fetch(`/api/posts/${encodeURIComponent(slug)}`, {
                    cache: "no-store",
                });
                if (!res.ok) {
                    const errData = await res.json();
                    throw new Error(errData?.error || "Failed to fetch post");
                }

                const found: BlogCardProps = await res.json();

                setPost(found);
                setTitle(found.title);
                setExcerpt(found.excerpt);
                setThumbnail(found.thumbnail || "");
            } catch (err: any) {
                console.error(err);
                alert(`❌ ${err.message}`);
                router.push("/dashboard");
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [props.params, router]);


    // Handle form field changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "title") setTitle(value);
        else if (name === "excerpt") setExcerpt(value);
        else if (name === "thumbnail") setThumbnail(value);
    };

    // Save updated post
    const handleSave = async () => {
        if (!post) return;

        if (!title.trim() || !excerpt.trim()) {
            alert("Title and excerpt cannot be empty");
            return;
        }

        const payload: UpdatePostPayload = { title, excerpt, thumbnail };

        setSaving(true);
        try {
            const res: Response = await fetch(`/api/posts/${encodeURIComponent(post.slug)}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errData: { error?: string } = await res.json();
                throw new Error(errData?.error || "Failed to save post");
            }

            alert("✅ Post updated successfully");
            router.push("/dashboard");
        } catch (err: any) {
            console.error(err);
            alert(`❌ ${err.message}`);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <p className="p-8">Loading post...</p>;

    return (
        <main className="min-h-screen flex flex-col items-center py-16 px-6">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-4">Edit Post</h1>

                <label className="block mb-2 font-semibold">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    className="w-full mb-4 border rounded px-3 py-2"
                />

                <label className="block mb-2 font-semibold">Excerpt</label>
                <textarea
                    name="excerpt"
                    value={excerpt}
                    onChange={handleChange}
                    className="w-full mb-4 border rounded px-3 py-2"
                    rows={5}
                />

                <label className="block mb-2 font-semibold">Thumbnail URL</label>
                <input
                    type="text"
                    name="thumbnail"
                    value={thumbnail}
                    onChange={handleChange}
                    className="w-full mb-4 border rounded px-3 py-2"
                />

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className={`px-4 py-2 rounded text-white ${saving ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {saving ? "Saving..." : "Save"}
                    </button>

                    <button
                        onClick={() => router.push("/dashboard")}
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </main>
    );
}
