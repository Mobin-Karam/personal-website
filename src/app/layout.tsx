// app/layout.tsx
import { Vazirmatn, Noto_Kufi_Arabic } from "next/font/google";
import "../styles/global.css";
import { cookies } from "next/headers";
import { AuthProvider } from "../context/AuthContext";
import ThemeProviderWrapper from "../components/theme/ThemeProviderWarraper";
import AuthContent from "../components/homepage/AuthContent";

const noto_kufi_arabic = Noto_Kufi_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "math", "symbols"],
});

const vazirmatn = Vazirmatn({
  display: "swap",
  weight: ["400", "900"],
  subsets: ["arabic", "latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read theme from cookie
  const themeCookie = (await cookies()).get("theme")?.value as
    | "light"
    | "dark"
    | undefined;

  return (
    <html lang="en" className={themeCookie ? 'dark' : ''}>
      <body
        className={`${noto_kufi_arabic.className} antialiased min-h-screen bg-white  dark:bg-gray-950 flex flex-col items-center justify-start`}
      >
        {/* AuthProvider can safely wrap client components */}
        <AuthProvider>
          {/* ThemeProviderWrapper is a client component */}
          <ThemeProviderWrapper>
            <main className="w-full flex flex-col items-center justify-center">
              <AuthContent>{children}</AuthContent>
            </main>
          </ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
