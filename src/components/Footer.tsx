import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1B3F] text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center mb-6 inline-block">
                            <div className="relative h-20 w-64">
                                <Image
                                    src="/logo-valja-akassa-white.png"
                                    alt="Välja A-kassa Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs mb-6">
                            Vi hjälper dig att hitta rätt a-kassa baserat på ditt yrke. Jämför enkelt och tryggt.
                        </p>
                        <Link
                            href="/artiklar"
                            className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors border border-gray-700"
                        >
                            Läs våra artiklar
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                            Snabblänkar
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-base text-gray-300 hover:text-white transition-colors">
                                    Hem
                                </Link>
                            </li>
                            <li>
                                <Link href="/akassor" className="text-base text-gray-300 hover:text-white transition-colors">
                                    A-kassor
                                </Link>
                            </li>
                            <li>
                                <Link href="/yrken" className="text-base text-gray-300 hover:text-white transition-colors">
                                    Yrken
                                </Link>
                            </li>
                            <li>
                                <Link href="/artiklar" className="text-base text-gray-300 hover:text-white transition-colors">
                                    Artiklar
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap" className="text-base text-gray-300 hover:text-white transition-colors">
                                    Sidkarta
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About Service */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                            Om tjänsten
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/om-oss" className="text-base text-gray-300 hover:text-white transition-colors">
                                    Om oss
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontakt" className="text-base text-gray-300 hover:text-white transition-colors">
                                    Kontakt
                                </Link>
                            </li>
                            <li>
                                <Link href="/integritetspolicy" className="text-base text-gray-300 hover:text-white transition-colors">
                                    Integritetspolicy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                            Kontakt
                        </h3>
                        <address className="not-italic text-gray-300 text-sm space-y-2">
                            <p>Välj a-kassa</p>
                            <p>Vallgatan 25</p>
                            <p>411 16 Göteborg</p>
                            <p className="pt-2">
                                <a href="mailto:info@valjakassa.se" className="hover:text-white transition-colors">
                                    info@valjakassa.se
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8">
                    <p className="text-center text-sm text-gray-400">
                        &copy; {currentYear} Välj a-kassa. Alla rättigheter förbehållna.
                    </p>
                </div>
            </div>
        </footer>
    );
}
