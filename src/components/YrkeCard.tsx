import Link from "next/link";
import { Yrke, Akassa } from "@/types";
import { ArrowRight, Briefcase } from "lucide-react";

interface Props {
    yrke: Yrke;
    akassa?: Akassa;
}

export default function YrkeCard({ yrke, akassa }: Props) {
    return (
        <Link
            href={`/yrken/${yrke.slug}`}
            className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-blue-200"
        >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                <Briefcase className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {yrke.name}
            </h3>

            {akassa && (
                <p className="mt-2 text-sm text-gray-500">
                    Rekommenderad a-kassa: <span className="font-medium text-gray-900">{akassa.name}</span>
                </p>
            )}

            <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                Se rekommendation
                <ArrowRight className="ml-1 h-4 w-4" />
            </div>
        </Link>
    );
}
