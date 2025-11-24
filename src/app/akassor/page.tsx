import AkassorGrid from "@/components/AkassorGrid";

export const metadata = {
    title: "Alla a-kassor | Välj a-kassa",
    description: "Här hittar du en lista över alla a-kassor i Sverige. Klicka på en a-kassa för att läsa mer på deras hemsida.",
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
