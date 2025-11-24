import Link from "next/link";
import { yrken } from "@/data/database";

export const metadata = {
    title: "Alla yrken | Välj a-kassa",
    description: "Här hittar du alla yrken vi matchar mot a-kassa. Klicka på ditt yrke för att se vilken a-kassa som rekommenderas.",
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
                        href={`/yrken/${yrke.slug}`} // Note: User mentioned /yrken/[slug] but current structure might be different. 
                        // The prompt said: "Varje yrke ska länka vidare till en yrkessida, t.ex. /yrken/larare"
                        // But existing code in Header had /yrke. I changed Header to /yrken.
                        // I should check if /yrken/[slug] exists or if I need to create it.
                        // Existing structure has `src/app/yrke` folder.
                        // I should probably rename `src/app/yrke` to `src/app/yrken` or create `src/app/yrken/[slug]`.
                        // For now I will link to `/yrken/${yrke.slug}` as requested.
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
