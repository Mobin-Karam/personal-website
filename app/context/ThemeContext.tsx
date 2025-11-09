"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
  initialTheme?: Theme;
}

export function ThemeProvider({ children, initialTheme }: Props) {
  const [theme, setThemeState] = useState<Theme>(initialTheme || "system");

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (typeof window !== "undefined") {
      if (newTheme === "system") {
        document.documentElement.classList.toggle(
          "dark",
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        document.cookie = "theme=; path=/; max-age=0";
        localStorage.removeItem("theme");
      } else {
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.cookie = `theme=${newTheme}; path=/; max-age=${60 * 60 * 24 * 365}`;
        localStorage.setItem("theme", newTheme);
      }
    }
  };

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || initialTheme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
