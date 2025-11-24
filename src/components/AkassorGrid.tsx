import Image from "next/image";
import Link from "next/link";
import { akassor } from "@/data/akassor";

export default function AkassorGrid() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {akassor.map((akassa) => (
                <Link
                    key={akassa.slug}
                    href={akassa.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                    <div className="relative mb-4 h-16 w-full">
                        <Image
                            src={akassa.logo}
                            alt={`${akassa.name} logotyp`}
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    <h3 className="text-center text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {akassa.name}
                    </h3>
                </Link>
            ))}
        </div>
    );
}
