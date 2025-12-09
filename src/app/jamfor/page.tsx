import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Jämför a-kassor – hitta bästa a-kassan för ditt yrke",
    description:
        "Jämför a-kassor och hitta den a-kassa som passar ditt yrke bäst. Se avgifter, handläggningstider, villkor och nya regler från 2025. En komplett guide för att välja rätt a-kassa.",
};

export default function JamforPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-12 text-gray-900 bg-white">
            {/* Hero-bild */}
            <section className="mb-12">
                <Image
                    src="/jamfor-comparison.png"
                    alt="Jämför a-kassor – illustration"
                    width={1200}
                    height={630}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                    priority
                />
            </section>

            {/* H1 */}
            <h1 className="mb-10 text-4xl md:text-5xl font-bold text-center tracking-tight text-slate-900">
                Jämför a-kassor – hitta rätt a-kassa för ditt yrke
            </h1>

            <div className="prose prose-lg prose-slate mx-auto">
                {/* 1. Så jämför du a-kassor */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">1. Så jämför du a-kassor – steg för steg</h2>

                    <h3 className="text-xl font-semibold mb-3 text-slate-800">Steg 1: Välj a-kassor efter ditt yrke</h3>
                    <p className="mb-6 leading-relaxed text-slate-700">
                        Det första du ska göra är att filtrera fram de a-kassor som riktar sig till din yrkesgrupp.
                        Skriv in din yrkestitel i tabellen längst upp på sidan – även liknande titlar fungerar – så får du automatiskt fram vilka a-kassor som accepterar just din typ av tjänst.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-slate-800">Steg 2: Kontrollera bransch och inriktning</h3>
                    <p className="mb-6 leading-relaxed text-slate-700">
                        När du har en lista över möjliga a-kassor är nästa steg att läsa på om vilken bransch de riktar sig till.
                        Vissa a-kassor välkomnar breda yrkesgrupper som administratörer, medan andra främst vänder sig till offentlig sektor eller privat sektor.
                    </p>
                    <p className="mb-6 leading-relaxed text-slate-700">
                        Se till att medlemsbeskrivningen stämmer överens med din arbetssituation.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-slate-800">Steg 3: Jämför medlemsavgift och villkor</h3>
                    <p className="mb-4 leading-relaxed text-slate-700">
                        När du valt ut de a-kassor som är relevanta för ditt yrke kan du jämföra:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
                        <li>Medlemsavgift per månad</li>
                        <li>Handläggningstid vid arbetslöshet</li>
                        <li>Kundtjänstens tillgänglighet</li>
                        <li>Eventuella kopplingar till fackförbund</li>
                    </ul>
                    <p className="mb-8 leading-relaxed text-slate-700">
                        Eftersom alla a-kassor följer samma lagar och regler är pris och service ofta det som skiljer dem mest åt.
                    </p>
                </section>

                {/* 2. Vad ska jag jämföra */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">2. Vad ska jag jämföra mellan a-kassorna?</h2>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Medlemsavgift</h3>
                        <p className="text-slate-700">De flesta a-kassor kostar mellan 100 och 170 kr per månad. Välj inte bara den billigaste – värdera även service och tillgänglighet.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Handläggningstid</h3>
                        <p className="text-slate-700">Handläggningstiden påverkar hur snabbt du kan få ersättning när du blivit arbetslös. Om genomsnittstider finns publicerade är det mycket värdefull information.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Kundservice och support</h3>
                        <p className="text-slate-700">En lättillgänglig kundtjänst kan vara avgörande när du behöver hjälp med regler och ansökan. Titta gärna på omdömen och vilka kontaktvägar som erbjuds.</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Koppling till fackförbund</h3>
                        <p className="text-slate-700">Du måste inte välja den a-kassa som ditt fackförbund rekommenderar, men det kan vara fördelaktigt. Vissa inkomstförsäkringar gäller endast om du är medlem i en specifik a-kassa.</p>
                    </div>
                </section>

                {/* 3. Vad kostar det */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">3. Vad kostar det att vara med i en a-kassa?</h2>
                    <p className="mb-4 leading-relaxed text-slate-700">
                        De flesta medlemmar betalar mellan 100 och 170 kronor i månaden.
                        Avgiften är densamma oavsett om du arbetar eller är arbetslös, och alla medlemmar betalar samma belopp.
                    </p>
                    <p className="mb-4 leading-relaxed text-slate-700">
                        Se medlemskapet som en försäkring: du betalar en låg summa för trygghet den dag något oväntat händer.
                    </p>
                </section>

                {/* 4. Nya regler 2025 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">4. Nya regler 2025 – så påverkar de dig</h2>
                    <p className="mb-4 leading-relaxed text-slate-700">
                        Den 1 oktober 2025 infördes nya regler för arbetslöshetsförsäkringen. Den största förändringen är att du nu kvalificerar dig med tidigare inkomst i stället för arbetad tid.
                    </p>
                    <p className="mb-2 leading-relaxed text-slate-700">För att få ersättning måste du:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
                        <li>vara minst 20 år</li>
                        <li>vara inskriven hos Arbetsförmedlingen</li>
                        <li>aktivt söka jobb</li>
                        <li>kunna ta passande arbete</li>
                        <li>aktivitetsrapportera varje månad</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2 text-slate-800">Övergångsregler</h3>
                    <p className="text-slate-700">Har du påbörjat din ersättningsperiod före 30 september 2025 gäller de gamla reglerna för den perioden.</p>
                </section>

                {/* 5. Inkomstvillkoret */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">5. Inkomstvillkoret – så kvalificerar du dig</h2>
                    <p className="mb-6 leading-relaxed text-slate-700">
                        Du måste uppfylla ett inkomstvillkor under en 12-månadersperiod, den så kallade ramtiden.
                    </p>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Huvudregeln</h3>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Minst 120 000 kr brutto totalt under ramtiden</li>
                            <li>Minst 11 000 kr per månad i fyra av dessa månader</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Alternativregeln</h3>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Fyra sammanhängande månader med minst 11 000 kr i månadsinkomst</li>
                            <li>Ger max 66 ersättningsdagar</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Företagare</h3>
                        <p className="text-slate-700">Egenföretagare följer samma regler, baserat på inkomster med egenavgifter.</p>
                    </div>
                </section>

                {/* 6. Medlemskapets längd */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">6. Medlemskapets längd styr ersättningsnivån</h2>
                    <p className="mb-4 leading-relaxed text-slate-700">Hur länge du varit medlem i en a-kassa avgör hur mycket ersättning du kan få:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
                        <li>12 månader eller mer: upp till 80 procent</li>
                        <li>6–11 månader: upp till 60 procent</li>
                        <li>0–5 månader: upp till 50 procent</li>
                    </ul>
                    <p className="text-slate-700">
                        A-kassan ersätter högst 80 procent av en inkomst upp till 34 000 kr per månad.
                        Har du högre lön behövs en inkomstförsäkring för full ersättning.
                    </p>
                </section>

                {/* 7. Så trappas ersättningen ner */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">7. Så trappas ersättningen ner</h2>
                    <p className="mb-4 leading-relaxed text-slate-700">Ersättningen minskar stegvis enligt följande:</p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>Dag 1–100: 80 procent</li>
                        <li>Dag 101–200: 70 procent</li>
                        <li>Dag 201–300: 65 procent</li>
                    </ul>
                </section>

                {/* 8. Hur länge får man ersättning? */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">8. Hur länge får man ersättning?</h2>
                    <p className="mb-4 leading-relaxed text-slate-700">Hur lång ersättningsperiod du får beror på hur många månader du tjänat minst 11 000 kr under ramtiden.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
                        <li>Maximal ersättningsperiod: 300 dagar</li>
                        <li>Alternativregeln: 66 dagar</li>
                    </ul>
                    <p className="text-slate-700">Som helt arbetslös får du ersättning för cirka 22 dagar per månad.</p>
                </section>

                {/* 9. Högsta möjliga ersättning */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">9. Högsta möjliga ersättning</h2>
                    <p className="mb-4 leading-relaxed text-slate-700">De första 100 dagarna kan du få:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
                        <li>upp till 27 200 kr brutto per månad (80 procent av 34 000)</li>
                    </ul>
                    <p className="text-slate-700">Därefter trappas ersättningen ner enligt reglerna ovan.</p>
                </section>

                {/* Sammanfattning */}
                <section className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Sammanfattning – så jämför du a-kassor</h2>
                    <ul className="list-disc pl-6 space-y-3 text-slate-700 text-lg">
                        <li>Skriv in ditt yrke i tabellen för att se vilka a-kassor du kan gå med i.</li>
                        <li>Läs på om bransch och inriktning.</li>
                        <li>Jämför pris, handläggningstid och kundservice.</li>
                        <li>Ta hänsyn till fackförbundets inkomstförsäkring om du har en.</li>
                        <li>Välj den a-kassa som ger bäst trygghet för din situation.</li>
                    </ul>
                </section>

            </div>
        </main>
    );
}
