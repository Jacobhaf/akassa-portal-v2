import AkassaComparison from "@/components/comparison/AkassaComparison";

export const metadata = {
    title: "Jämför A-kassor – Hitta bästa a-kassan 2025 | Välja A-kassa",
    description: "Jämför villkor, priser och omdömen för alla Sveriges a-kassor. Hitta den bästa a-kassan för dig.",
    openGraph: {
        title: "Jämför A-kassor | Välja A-kassa",
        description: "Jämför villkor, priser och omdömen för alla Sveriges a-kassor.",
        url: "https://www.valjaakassa.se/jamfor",
    },
};

export default function ComparePage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="bg-[#0B1B3F] py-16 sm:py-24">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Jämför a-kassor - Välja A-kassa
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        Hitta rätt a-kassa för ditt yrke och din bransch. Vi hjälper dig att jämföra priser, villkor och medlemsförmåner så att du kan göra ett tryggt val.
                    </p>
                </div>
            </div>

            {/* Comparison Module */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 -mt-10">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <AkassaComparison />
                </div>
            </div>

            {/* SEO Content Section */}
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
                <div className="prose prose-blue mx-auto max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900">Så väljer du rätt a-kassa</h2>
                    <p className="text-gray-600">
                        Att välja a-kassa kan verka krångligt, men det är faktiskt ganska enkelt. De flesta a-kassor är specialiserade på specifika yrkesområden eller branscher. Vissa a-kassor är öppna för alla, oavsett vad du jobbar med. Börja med att söka på ditt yrke i vår tabell ovan för att se vilka kassor som passar dig.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8">Samma grundtrygghet hos alla</h3>
                    <p className="text-gray-600">
                        Det är viktigt att veta att den grundläggande ersättningen styrs av lagstiftning och är densamma oavsett vilken a-kassa du är med i. Upp till taket (som för närvarande ger ca 26 400 kr/mån före skatt) får du samma ersättning. Skillnaden ligger i medlemsavgiften, servicenivån och eventuella tilläggsförsäkringar som ingår i medlemskapet.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8">Vanliga frågor inför bytet</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>
                            <strong>Vad kostar det?</strong> Avgiften varierar mellan ca 100 och 170 kr per månad beroende på vilken kassa du väljer.
                        </li>
                        <li>
                            <strong>Kan jag byta a-kassa?</strong> Ja, det går bra att byta. Se bara till att det inte blir något glapp i medlemskapet för att skydda din intjänade tid.
                        </li>
                        <li>
                            <strong>Måste jag vara med i facket?</strong> Nej, a-kassan och facket är två skilda saker. Du kan vara med i a-kassan utan att vara med i facket, även om många väljer att vara med i båda för extra trygghet.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
