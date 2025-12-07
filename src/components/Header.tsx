"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming utils exists, otherwise I'll mock className joining

// Helper component for Nav Links
function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-medium transition-colors hover:text-white",
                active ? "text-white" : "text-blue-200/80"
            )}
        >
            {children}
            {active && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] rounded-full" />
            )}
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/20 opacity-0 transition-opacity hover:opacity-100" />
        </Link>
    );
}

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0B1B3F]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 md:h-32 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative z-50">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                        <div className="relative h-16 w-64 md:h-24 md:w-96 transition-transform group-hover:scale-105">
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
                <nav className="hidden md:flex items-center gap-10">
                    <NavLink href="/" active={isActive("/")}>Hem</NavLink>
                    <NavLink href="/#jamfor" active={isActive("/#jamfor")}>A-kassor</NavLink>
                    <NavLink href="/jamfor" active={isActive("/jamfor")}>Jämför a-kassor</NavLink>
                    <NavLink href="/yrken" active={isActive("/yrken")}>Yrken</NavLink>
                    <NavLink href="/inkomstforsakring" active={isActive("/inkomstforsakring")}>Inkomstförsäkring</NavLink>
                    <NavLink href="/artiklar" active={isActive("/artiklar")}>Artiklar</NavLink>
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

                    <div className="relative flex flex-col min-h-[calc(100vh-80px)] px-6 py-8 space-y-8">

                        {/* Twitter / Social */}
                        <div className="flex items-center">
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                        </div>

                        {/* Utforska Group */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300">Utforska</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/jamfor" className="text-xl font-bold text-white hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Alla a-kassor</Link>
                                <Link href="/yrken" className="text-xl font-bold text-white hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Hitta via yrke</Link>
                                <Link href="/inkomstforsakring" className="text-xl font-bold text-white hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Inkomstförsäkring</Link>
                                <Link href="/artiklar" className="text-xl font-bold text-white hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Artiklar & Guider</Link>
                            </div>
                        </div>

                        {/* Om tjänsten Group */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300">Om tjänsten</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/om-oss" className="text-base text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Om oss</Link>
                                <Link href="/integritetspolicy" className="text-base text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Integritetspolicy</Link>
                                <Link href="/cookies" className="text-base text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Cookies</Link>
                            </div>
                        </div>

                        {/* Kontakta oss Group */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300">Kontakta oss</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/kontakt" className="text-base text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header >
    );
}
