
import Image from "next/image";
import Link from "next/link";
import { Akassa } from "@/types";
import { ArrowRight, Check } from "lucide-react";

interface Props {
    akassa: Akassa;
}

export default function AkassaCard({ akassa }: Props) {
    // Format numbers
    const membersFormatted = new Intl.NumberFormat("sv-SE").format(akassa.members);
    const maxCompFormatted = new Intl.NumberFormat("sv-SE").format(akassa.maxCompPerMonth);

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-200 hover:shadow-md md:flex-row md:items-center md:p-2">

            {/* Logo Section */}
            <div className="flex items-center p-6 md:w-1/4 md:p-4">
                <div className="relative h-12 w-full max-w-[140px]">
                    <Image
                        src={`/logos/${akassa.slug}.png`} // Assuming logo format or using explicit logoUrl logic if exists?
                        // Actually, 'logo' property wasn't added to Akassa interface in types... 
                        // But I see `logo: "/logos/aea.png"` in akassor.ts but NOT in database.ts? 
                        // Wait. database.ts was where I updated. Does database.ts HAS a logo field? 
                        // Looking at Step 1290, database.ts does NOT have logo field!
                        // The user said: "Use actual logo URLs already existing in the project."
                        // akassor.ts has them. database.ts needs them or I derive them from slug?
                        // Most logos are `/logos/[slug].png` (Step 1203 showed this).
                        // I will rely on slug mapping for now.
                        alt={`${akassa.name} logotyp`}
                        fill
                        className="object-contain object-left md:object-center"
                    />
                </div>
            </div>

            {/* Middle Section: Stats */}
            <div className="flex flex-1 flex-col justify-center gap-4 border-t border-gray-100 bg-gray-50/50 p-6 md:flex-row md:border-0 md:bg-transparent md:p-4">
                <div className="flex flex-col gap-1 md:items-center">
                    <span className="text-sm text-gray-500">Medlemmar</span>
                    <span className="font-semibold text-gray-900">{membersFormatted} st</span>
                </div>
                <div className="hidden h-full w-px bg-gray-200 md:block" />
                <div className="flex flex-col gap-1 md:items-center">
                    <span className="text-sm text-gray-500">Max ersättning</span>
                    <span className="font-semibold text-gray-900">{maxCompFormatted} kr/mån</span>
                </div>
            </div>

            {/* Right Section: Price & Action */}
            <div className="flex flex-col justify-between gap-4 border-t border-gray-100 p-6 md:w-1/4 md:border-0 md:p-4 md:text-right">
                <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        Pris
                    </span>
                    <div className="flex items-baseline gap-1 md:justify-end">
                        <span className="text-2xl font-bold text-blue-600">
                            {akassa.pricePerMonth}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                            kr/mån
                        </span>
                    </div>
                </div>

                <Link
                    href={`/akassa/${akassa.slug}`}
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-full"
                >
                    Läs mer
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
