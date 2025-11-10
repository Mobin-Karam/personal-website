"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem("token");
        setHasToken(!!token);
    }, []);

    const handleLogout = () => {
        // Delete cookie (if used)
        document.cookie = "token=; path=/; max-age=0";

        // Remove from localStorage
        localStorage.removeItem("token");

        setHasToken(false);
        router.push("/auth/login");
    };

    if (!hasToken) return null; // Hide button if not logged in

    return (
        <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
            Logout
        </button>
    );
}
