"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "@/app/context/ThemeContext";

interface Props {
    children: ReactNode;
    initialTheme?: "light" | "dark";
}

export default function ThemeProviderWrapper({ children, initialTheme }: Props) {
    const [mounted, setMounted] = useState(false);

    // Run only once after client mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid SSR/client mismatch

    return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>;
}
