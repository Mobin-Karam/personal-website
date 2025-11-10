"use client";

import AuthGuard from "@/components/auth/auth-components/AuthGuard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ThemeSwitcher from "../../components/theme/ThemeSwitcher";
import TopDashboard from "@/components/dashboard/top/TopDashboard";
import { BlogCardProps } from "@/types/blog";

export default function DashboardPage() {
    const { isLoggedIn, logout } = useAuth()
    const router = useRouter();
    const [posts, setPosts] = useState<BlogCardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null); // slug being deleted
    useEffect(() => {
        if (!isLoggedIn) {
            // If user is not logged in, redirect to login
            router.replace("/login");
        }
    }, [isLoggedIn, router]);
    // Fetch posts from API
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/posts", { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to fetch posts");
            const data: BlogCardProps[] = await res.json();
            setPosts(data);
        } catch (err) {
            console.error(err);
            alert("❌ Failed to load posts");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    const handleDelete = async (slug: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            setDeleting(slug);
            const res = await fetch(`/api/posts/${encodeURIComponent(slug)}`, { method: "DELETE" });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData?.error || "Failed to delete post");
            }

            // Remove deleted post from state
            setPosts((prev) => prev.filter((p) => p.slug !== slug));
        } catch (err: any) {
            console.error(err);
            alert(`❌ ${err.message}`);
        } finally {
            setDeleting(null);
        }
    };

    if (!isLoggedIn) {
        return <p className="text-center mt-10">Checking authentication...</p>;
    }

    return (
        <div className="flex-1 transition-all  duration-300 ease-in-out xl:ml-[290px]">
            <TopDashboard router={router} />
            <Link
                href="/dashboard/new-post"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6 inline-block"
            >
                ➕ Write New Post
            </Link>

            {loading ? (
                <p>Loading posts...</p>
            ) : posts.length === 0 ? (
                <p>No posts yet.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {posts.map((post) => (
                        <div
                            key={post.slug}
                            className="flex justify-between items-center p-4 border rounded"
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{post.title}</h2>
                                <p className="text-sm text-gray-500">
                                    {new Date(post.date).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 mt-1">{post.excerpt}</p>
                            </div>

                            <div className="flex gap-2">
                                {/* <Link
                                            href={`/dashboard/edit-post/${encodeURIComponent(post.slug)}`}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                        >
                                            Edit
                                        </Link> */}

                                <button
                                    onClick={() => handleDelete(post.slug)}
                                    disabled={deleting === post.slug}
                                    className={`px-3 py-1 rounded text-white ${deleting === post.slug
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-red-600 hover:bg-red-700"
                                        }`}
                                >
                                    {deleting === post.slug ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}
