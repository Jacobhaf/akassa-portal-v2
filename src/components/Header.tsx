"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1B3F] backdrop-blur-md">
            <div className="mx-auto flex h-48 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-40 w-[36rem] transition-transform group-hover:scale-105">
                            <Image
                                src="/logo-valja-akassa-white.png"
                                alt="Välja A-kassa Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        Hem
                    </Link>
                    <Link
                        href="/#jamfor"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        A-kassor
                    </Link>
                    <Link
                        href="/yrken"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        Yrken
                    </Link>
                    <Link
                        href="/artiklar"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        Artiklar
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/#jamfor"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    >
                        Jämför a-kassor
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Öppna huvudmenyn</span>
                        {isMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white border-b border-gray-200 shadow-lg">
                        <Link
                            href="/"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hem
                        </Link>
                        <Link
                            href="/#jamfor"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            A-kassor
                        </Link>
                        <Link
                            href="/yrken"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Yrken
                        </Link>
                        <Link
                            href="/artiklar"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Artiklar
                        </Link>
                        <Link
                            href="/#jamfor"
                            className="block w-full text-center mt-4 rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Jämför a-kassor
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
