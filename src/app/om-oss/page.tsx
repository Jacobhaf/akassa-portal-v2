export const metadata = {
    title: "Om oss | Välj a-kassa",
    description: "Vi hjälper dig att hitta rätt a-kassa baserat på ditt yrke.",
};

export default function OmOssPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Om Välj a-kassa
            </h1>

            <div className="prose prose-lg text-gray-600">
                <p>
                    Välj a-kassa är en oberoende tjänst som hjälper dig att hitta rätt a-kassa utifrån ditt yrke.
                    Vi vet att det kan vara krångligt att veta vilken a-kassa man ska välja, särskilt om man byter bransch
                    eller är ny på arbetsmarknaden.
                </p>
                <p>
                    Vårt mål är att göra det enkelt att jämföra och hitta rätt trygghet. Vi listar alla Sveriges a-kassor
                    och matchar dem mot hundratals yrken.
                </p>
                <p>
                    Observera att vi inte är en a-kassa själva, utan vi länkar vidare till respektive a-kassas hemsida
                    där du kan läsa mer och bli medlem.
                </p>
            </div>
        </main>
    );
}
