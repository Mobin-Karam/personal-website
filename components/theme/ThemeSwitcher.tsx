'use client'
import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex gap-2">
            <button onClick={() => setTheme("light")} className=" cursor-pointer text-white">Light</button>
            <button onClick={() => setTheme("dark")} className=" cursor-pointer text-white">Dark</button>
            <button onClick={() => setTheme("system")} className=" cursor-pointer text-white">System</button>
            <p>Current: {theme}</p>
        </div>
    );
}
