"use client";

import React from "react";
import { WelcomeButtons } from "./WelcomeButtons";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export const WelcomeList = () => {
    const { isLoggedIn, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <div className="max-w-md flex flex-row items-center justify-center gap-3">
            <WelcomeButtons href="/" name="Home" />
            <WelcomeButtons href="/aboutme" name="AboutMe" />
            <WelcomeButtons href="/shop" name="Shop" />
            <WelcomeButtons href="/blog" name="Blog" />
            <WelcomeButtons href="/projects" name="Projects" />
            <WelcomeButtons href="/contactme" name="Contact" />

            {isLoggedIn ? (
                <>
                    <WelcomeButtons href="/dashboard" name="Dashboard" />
                    <button
                        onClick={handleLogout}
                        className="text-red-500 p-1 md:text-xl text-sm hover:underline border border-transparent transition-colors duration-200"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <WelcomeButtons href="/login" name="Login" />
            )}
        </div>
    );
};
