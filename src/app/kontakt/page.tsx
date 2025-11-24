export const metadata = {
    title: "Kontakt | Välj a-kassa",
    description: "Kontakta oss om du har frågor om a-kassor eller vår tjänst.",
};

export default function KontaktPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kontakt
            </h1>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div className="prose prose-lg text-gray-600">
                    <p>
                        Har du frågor om vår tjänst eller hittar du felaktig information? Tveka inte att kontakta oss.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Postadress</h3>
                    <p className="not-prose">
                        Välj a-kassa<br />
                        Vallgatan 25<br />
                        411 16 Göteborg
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">E-post</h3>
                    <p>
                        Du når oss enklast via e-post: <a href="mailto:info@valjakassa.se" className="text-blue-600 hover:underline">info@valjakassa.se</a>
                    </p>

                    <div className="mt-8 rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                        <p className="font-medium">Observera!</p>
                        <p className="mt-1">
                            Vi är inte en a-kassa och kan inte svara på frågor om ditt specifika ärende, utbetalningar eller medlemskap.
                            För sådana frågor måste du kontakta din a-kassa direkt.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
