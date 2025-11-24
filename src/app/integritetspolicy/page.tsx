export const metadata = {
    title: "Integritetspolicy | Välj a-kassa",
    description: "Läs om hur vi hanterar dina personuppgifter och cookies.",
};

export default function IntegritetspolicyPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Integritetspolicy
            </h1>

            <div className="prose prose-lg text-gray-600">
                <p>
                    Din integritet är viktig för oss. Denna policy beskriver hur vi samlar in, använder och skyddar din information
                    när du använder vår webbplats.
                </p>

                <h3>Personuppgifter</h3>
                <p>
                    Vi sparar inga personuppgifter om dig när du besöker vår hemsida, såvida du inte själv väljer att kontakta oss
                    via e-post. I sådana fall använder vi endast din e-postadress för att svara på din förfrågan.
                </p>

                <h3>Cookies och analys</h3>
                <p>
                    Vi kan använda cookies och liknande tekniker för att förbättra din upplevelse och analysera hur vår webbplats används.
                    Informationen som samlas in är anonym och används för att se besöksstatistik och förbättra innehållet.
                </p>
                <p>
                    Du kan själv välja att stänga av cookies i din webbläsare om du inte vill att de ska sparas.
                </p>

                <h3>Externa länkar</h3>
                <p>
                    Vår webbplats innehåller länkar till externa webbplatser (t.ex. a-kassor). Vi ansvarar inte för integritetspolicyn
                    eller innehållet på dessa webbplatser.
                </p>

                <h3>Kontakt</h3>
                <p>
                    Om du har frågor om vår integritetspolicy är du välkommen att kontakta oss via vår kontaktsida.
                </p>
            </div>
        </main>
    );
}
