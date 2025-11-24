import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Hitta rätt a-kassa för ditt yrke | A-kassa Portal",
        template: "%s | A-kassa Portal",
    },
    description: "Jämför Sveriges alla a-kassor och hitta rätt kassa för ditt yrke. Snabb jämförelse, tydliga rekommendationer och uppdaterad information.",
    openGraph: {
        type: "website",
        locale: "sv_SE",
        url: "https://akassa-portal-v2-wvsoh22w7-jacobhafs-projects.vercel.app",
        siteName: "A-kassa Portal",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "A-kassa Portal - Hitta rätt a-kassa",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sv" className="scroll-smooth">
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-grow bg-gray-50 text-gray-900">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
