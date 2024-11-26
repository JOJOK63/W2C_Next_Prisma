import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import {Inter} from "next/font/google";
import {Nav} from "@/components/Nav";
import QueryProvider from "@/db/QueryClient";

export const metadata: Metadata = {
  title: "White Cat Cookies",
  description: "La sucrerie qui touchera vos coeurs",
};

//configuration de la police
const inter = Inter({subsets: ["latin"], variable: "--font-sans"});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn("bg-background min-h-screen font-sans antialiased", inter.variable)}>
        <div className="flex flex-col min-h-screen">
            <header>
                <Nav />
            </header>
            <main
                className="flex-grow w-full pt-10 pb-10 bg-lightBrownColor text-textColor">
                <QueryProvider>{children}</QueryProvider>
            </main>

            <footer className="w-full text-center bg-navbarColor text-white text-xs p-1">
                2024 by JOJOK
            </footer>
        </div>
        </body>
        </html>
    );
}
