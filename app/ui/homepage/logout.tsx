"use client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        // delete cookie
        document.cookie = "token=; path=/; max-age=0";
        router.push("/auth/login");
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
            Logout
        </button>
    );
}
