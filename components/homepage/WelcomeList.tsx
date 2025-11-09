"use client";

import React from "react";
import { WelcomeButtons } from "./WelcomeButtons";
import { useRouter } from "next/navigation";
import AuthGuard from "../auth/auth-components/AuthGuard";
import { useAuth } from "../../app/context/AuthContext";

export const WelcomeList = () => {
    const { isLoggedIn } = useAuth()
    return (
        <div className="max-w-md flex flex-row items-center justify-center gap-3">
            <WelcomeButtons href="/" name="Home" />
            <WelcomeButtons href="/aboutme" name="AboutMe" />
            <WelcomeButtons href="/shop" name="Shop" />
            <WelcomeButtons href="/blog" name="Blog" />
            <WelcomeButtons href="/projects" name="Projects" />
            <WelcomeButtons href="/contactme" name="Contact" />
            {isLoggedIn ? <WelcomeButtons href="/dashboard" name="Dashboard" /> : <></>}
        </div>
    );
};
