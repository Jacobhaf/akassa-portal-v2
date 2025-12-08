import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.valjaakassa.se'),
    title: {
        default: "Hitta rätt a-kassa för ditt yrke | Välja A-kassa",
        template: "%s | Välja A-kassa",
    },
    description: "Jämför Sveriges alla a-kassor och hitta rätt kassa för ditt yrke. Snabb jämförelse, tydliga rekommendationer och uppdaterad information.",
    openGraph: {
        type: "website",
        locale: "sv_SE",
        url: "https://www.valjaakassa.se",
        siteName: "Välja A-kassa",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Välja A-kassa - Hitta rätt a-kassa",
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
