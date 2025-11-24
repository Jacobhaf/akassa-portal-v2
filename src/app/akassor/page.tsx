import AkassorGrid from "@/components/AkassorGrid";

export const metadata = {
    title: "Jämför alla Sveriges A-kassor | A-kassa Portal",
    description: "Här hittar du en komplett lista över alla a-kassor i Sverige. Jämför avgifter, villkor och hitta rätt a-kassa för dig.",
    openGraph: {
        title: "Jämför alla Sveriges A-kassor | A-kassa Portal",
        description: "Här hittar du en komplett lista över alla a-kassor i Sverige. Jämför avgifter, villkor och hitta rätt a-kassa för dig.",
        url: "https://akassa-portal-v2-wvsoh22w7-jacobhafs-projects.vercel.app/akassor",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Alla a-kassor - A-kassa Portal",
            },
        ],
    },
};

export default function AkassorPage() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Alla a-kassor
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Här hittar du alla Sveriges a-kassor. Klicka på den a-kassa du vill veta mer om för att komma direkt till deras hemsida.
                </p>
            </div>

            <AkassorGrid />
        </main>
    );
}
