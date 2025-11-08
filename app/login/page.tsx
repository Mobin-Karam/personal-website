"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext"; // Make sure you have AuthContext

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { isLoggedIn, login } = useAuth();

    // Redirect if already logged in
    useEffect(() => {
        if (isLoggedIn) {
            router.replace("/dashboard");
        }
    }, [isLoggedIn, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                // Save token and update global auth state
                login(data.token);

                // Redirect to dashboard
                router.replace("/dashboard");
            } else {
                alert("❌ " + (data.message || "Invalid credentials"));
            }
        } catch (err) {
            console.error(err);
            alert("❌ Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="max-h-screen w-full flex items-center justify-center bg-transparent">
            <div className="bg-white p-8 rounded shadow w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </main>
    );
}
