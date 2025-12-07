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
            <div className="mx-auto flex h-20 md:h-48 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative z-50 bg-[#0B1B3F]">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                        <div className="relative h-20 w-80 md:h-40 md:w-[36rem] transition-transform group-hover:scale-105">
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
                        href="/jamfor"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        Jämför a-kassor
                    </Link>
                    <Link
                        href="/yrken"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        Yrken
                    </Link>
                    <Link
                        href="/inkomstforsakring"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        Inkomstförsäkring
                    </Link>
                    <Link
                        href="/artiklar"
                        className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        Artiklar
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center ml-8">
                    <Link
                        href="/jamfor"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    >
                        Jämför a-kassor
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Öppna huvudmenyn</span>
                        {isMenuOpen ? (
                            <X className="h-8 w-8" aria-hidden="true" />
                        ) : (
                            <Menu className="h-8 w-8" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Premium Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[80px] z-40 bg-[#0B1B3F] md:hidden overflow-y-auto">
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>

                    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] space-y-8 px-6 py-12">
                        <Link
                            href="/"
                            className="text-3xl font-bold text-white hover:text-blue-300 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hem
                        </Link>
                        <Link
                            href="/#jamfor"
                            className="text-3xl font-bold text-white hover:text-blue-300 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            A-kassor
                        </Link>
                        <Link
                            href="/jamfor"
                            className="text-3xl font-bold text-white hover:text-blue-300 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Jämför a-kassor
                        </Link>
                        <Link
                            href="/yrken"
                            className="text-3xl font-bold text-white hover:text-blue-300 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Yrken
                        </Link>
                        <Link
                            href="/inkomstforsakring"
                            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-green-200 hover:from-white hover:to-white transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inkomstförsäkring
                        </Link>
                        <Link
                            href="/artiklar"
                            className="text-3xl font-bold text-white hover:text-blue-300 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Artiklar
                        </Link>

                        <div className="pt-8 w-full max-w-xs">
                            <Link
                                href="/jamfor"
                                className="block w-full text-center rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-500 hover:shadow-2xl hover:-translate-y-1 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Jämför a-kassor nu
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
