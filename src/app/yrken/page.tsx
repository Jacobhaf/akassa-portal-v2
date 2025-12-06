
import Link from "next/link";
import { yrken } from "@/data/database";

export const metadata = {
    title: "Alla yrken – Hitta rätt a-kassa för ditt jobb | A-kassa Portal",
    description: "Lista över alla yrken vi matchar mot a-kassa. Hitta ditt yrke och se vilken a-kassa som rekommenderas för just din bransch.",
    openGraph: {
        title: "Alla yrken – Hitta rätt a-kassa för ditt jobb | A-kassa Portal",
        description: "Lista över alla yrken vi matchar mot a-kassa. Hitta ditt yrke och se vilken a-kassa som rekommenderas för just din bransch.",
        url: "https://akassa-portal-v2-wvsoh22w7-jacobhafs-projects.vercel.app/yrken",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Alla yrken - A-kassa Portal",
            },
        ],
    },
};

export default function YrkenPage() {
    // Sort professions alphabetically
    const sortedYrken = [...yrken].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Alla yrken
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Här hittar du alla yrken vi matchar mot a-kassa.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedYrken.map((yrke) => (
                    <Link
                        key={yrke.slug}
                        href={`/yrken/${yrke.slug}`}
                        // The prompt said: "Varje yrke ska länka vidare till en yrkessida, t.ex. /yrken/larare"
                        // But existing code in Header had /yrke. I changed Header to /yrken.
                        // I should check if /yrken/[slug] exists or if I need to create it.
                        // Existing structure has `src / app / yrke` folder.
                        // I should probably rename `src / app / yrke` to `src / app / yrken` or create `src / app / yrken / [slug]`.
                        // For now I will link to `/ yrken / ${ yrke.slug } ` as requested.
                        className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                    >
                        <span className="font-medium text-gray-900 group-hover:text-blue-600">
                            {yrke.name}
                        </span>
                        <span className="text-gray-400 group-hover:text-blue-600">→</span>
                    </Link>
                ))}
            </div>
        </main>
    );
}
