export interface ChecklistContent {
    slug: string;
    professionName: string; // e.g., "Administratör"
    step2List: string[]; // List of items to submit
    step3Reason: string; // Why employer certificate is important for this profession
    step4Questions: string; // Typical questions
}

export const checklists: Record<string, ChecklistContent> = {
    "administrator": {
        slug: "administrator",
        professionName: "Administratör",
        step2List: [
            "Tidrapporter för dina arbetade timmar",
            "Intyg om eventuella bisysslor eller extrajobb",
            "Uppsägningsbesked eller anställningsavtal"
        ],
        step3Reason: "För administratörer är det viktigt att alla olika anställningsformer (t.ex. visstid, projekt) redovisas korrekt för att fastställa din arbetstid och lön.",
        step4Questions: "Många administratörer undrar hur ersättningen påverkas av deltidsarbete eller korta projektanställningar under arbetslösheten."
    },
    "banktjansteman": {
        slug: "banktjansteman",
        professionName: "Banktjänsteman",
        step2List: [
            "Arbetsgivarintyg från din bank/finansarbetsgivare",
            "Information om eventuella avgångsvederlag eller slutlön",
            "Kopia på uppsägningsbeskedet"
        ],
        step3Reason: "Banktjänstemän har ofta förmåner eller avgångsvederlag som måste granskas för att avgöra när a-kassan kan börja betalas ut.",
        step4Questions: "Vanliga frågor rör hur provisioner eller bonusar påverkar den a-kassegrundande inkomsten och om avgångsvederlag skjuter på ersättningen."
    },
    "barnskotare": {
        slug: "barnskotare",
        professionName: "Barnskötare",
        step2List: [
            "Arbetsgivarintyg från kommunen eller förskolan",
            "Schema eller tidrapporter om du arbetat timmar",
            "Övriga intyg om du haft flera arbetsgivare (t.ex. vid vikariat)"
        ],
        step3Reason: "Som barnskötare med varierande arbetstider eller vikariat är arbetsgivarintyget avgörande för att bevisa hur mycket du faktiskt arbetat.",
        step4Questions: "Många frågar hur timvikariat påverkar " + "dagar med ersättning och hur man fyller i tidrapporterna korrekt vid delvis arbete."
    },
    "bussforare": {
        slug: "bussforare",
        professionName: "Bussförare",
        step2List: [
            "Kopia på ditt körkort och yrkeskompetensbevis (YKB) vid behov",
            "Arbetsgivarintyg från trafikbolaget",
            "Uppgifter om schemalagd arbetstid"
        ],
        step3Reason: "För bussförare med skiftarbete och ob-tillägg är intyget viktigt för att räkna med alla tillägg i den a-kassegrundande inkomsten.",
        step4Questions: "Vanliga frågor handlar om hur delade turer och sovande jour påverkar arbetstidsmåttet och därmed ersättningen."
    },
    "butikssaljare": {
        slug: "butikssaljare",
        professionName: "Butikssäljare",
        step2List: [
            "Arbetsgivarintyg för samtliga butiker du arbetat i",
            "Anställningsbevis för extraarbeten",
            "Lönespecifikationer om intyg saknas"
        ],
        step3Reason: "Butikssäljare har ofta ob-tillägg och mertid som måste styrkas för att du ska få rätt ersättningsnivå baserad på din faktiska inkomst.",
        step4Questions: "Frågor gäller ofta hur man redovisar extra timmar vid behovsanställning och hur det påverkar a-kassan."
    },
    "byggnadsarbetare": {
        slug: "byggnadsarbetare",
        professionName: "Byggnadsarbetare",
        step2List: [
            "Arbetsgivarintyg från byggföretaget",
            "Kopia på yrkesbevis om det efterfrågas",
            "Uppgifter om ackordslön om tillämpligt"
        ],
        step3Reason: "För byggnadsarbetare med ackordslön eller olika tillägg är arbetsgivarintyget helt avgörande för att din snittlön ska bli korrekt beräknad.",
        step4Questions: "Frågor handlar ofta om hur permitteringar, väderhinder eller säsongsvariationer i byggbranschen hanteras av a-kassan."
    },
    "ekonom": {
        slug: "ekonom",
        professionName: "Ekonom",
        step2List: [
            "Arbetsgivarintyg",
            "Eventuella konsultavtal om du haft eget",
            "Avgångsvederlagsavtal"
        ],
        step3Reason: "Ekonomer har ibland bonusar eller andra rörliga lönedelar. Arbetsgivarintyget säkerställer att all skattepliktig inkomst räknas med.",
        step4Questions: "Många ekonomer undrar hur eget företagande (även vilande) påverkar rätten till a-kassa och om man får ta uppdrag under tiden."
    },
    "elektriker": {
        slug: "elektriker",
        professionName: "Elektriker",
        step2List: [
            "Arbetsgivarintyg",
            "Kopia på ECY-certifikat kan behövas",
            "Reseräkningar om traktamente ingår i lön"
        ],
        step3Reason: "Elektriker har ofta traktamenten och resetillägg. Det är viktigt att skilja på kostnadsersättningar och lön på intyget.",
        step4Questions: "Vanliga frågor gäller hur arbete på annan ort (traktamente) påverkar ersättningen och hur man redovisar restid."
    },
    "forskollarare": {
        slug: "forskollarare",
        professionName: "Förskollärare",
        step2List: [
            "Lärarlegitimation (kopia)",
            "Arbetsgivarintyg från kommun eller privat huvudman",
            "Intyg om ferielön om du jobbat i skola"
        ],
        step3Reason: "För förskollärare är det viktigt att rätt anställningsform och sysselsättningsgrad framgår, särskilt om du haft ferietjänst eller uppehållstjänst.",
        step4Questions: "Frågor rör ofta skillnaden mellan ferielön och vanlig semesterersättning och hur det påverkar a-kassan under sommaren."
    },
    "frisor": {
        slug: "frisor",
        professionName: "Frisör",
        step2List: [
            "Arbetsgivarintyg om du varit anställd",
            "Intyg om hyrstol om du varit egenföretagare",
            "Avregistreringsbevis för företag om du avslutat det"
        ],
        step3Reason: "Frisörer jobbar ofta på provision eller hyrstol. Intyget måste tydligt visa din faktiska bruttoinkomst och om du varit anställd eller företagare.",
        step4Questions: "Den vanligaste frågan är hur man hanterar övergången från att ha hyrt stol (företagare) till att bli arbetssökande."
    },
    "ingenjor": {
        slug: "ingenjor",
        professionName: "Ingenjör",
        step2List: [
            "Arbetsgivarintyg",
            "Examensbevis (kan efterfrågas)",
            "Kopia på uppsägningsavtal vid varsel"
        ],
        step3Reason: "Ingenjörer har ofta rörliga lönedelar eller bonusar. Arbetsgivarintyget måste specificera dessa separat så att din dagpenning baseras på total inkomst.",
        step4Questions: "Frågor rör ofta avgångsvederlag vid varsel och om man får studera eller vidareutbilda sig med bibehållen a-kassa."
    },
    "it-konsult": {
        slug: "it-konsult",
        professionName: "IT-konsult",
        step2List: [
            "Arbetsgivarintyg",
            "Intyg om avveckling av eget företag (om relevant)",
            "Uppdragskontrakt om du varit underkonsult"
        ],
        step3Reason: "Många IT-konsulter växlar mellan anställning och eget företag. Intygen måste tydligt visa när du varit vad för att du ska bedömas rätt.",
        step4Questions: "Det vanligaste är frågor kring 'vilande företag' – om man får ha sitt bolag kvar registrerat men inaktivt under arbetslösheten."
    },
    "journalist": {
        slug: "journalist",
        professionName: "Journalist",
        step2List: [
            "Arbetsgivarintyg för anställningar",
            "Lista på sålda frilansartiklar/arvoden",
            "Presskort (identifikation)"
        ],
        step3Reason: "För journalister med en blandning av anställning och frilans (arvoden) är det avgörande att varje uppdrags ersättning och tidsåtgång redovisas.",
        step4Questions: "Frågor gäller ofta hur man hanterar royalty-inkomster kontra arbetade timmar och om man får skriva enstaka artiklar som arbetslös."
    },
    "kock": {
        slug: "kock",
        professionName: "Kock",
        step2List: [
            "Arbetsgivarintyg från alla restauranger du jobbat på",
            "Schema för ob-tillägg",
            "Intyg för extra vid behov-anställning"
        ],
        step3Reason: "Kockar har ofta obekväm arbetstid och dricks (som sällan är a-kassegrundande, men lön är). Intyget säkrar att all lön och OB räknas med.",
        step4Questions: "Vanliga frågor rör hur man fyller i kassakort för delade turer och om dricks räknas in i den a-kassegrundande inkomsten (oftast nej)."
    },
    "lagerarbetare": {
        slug: "lagerarbetare",
        professionName: "Lagerarbetare",
        step2List: [
            "Arbetsgivarintyg",
            "Intyg för skift- eller nattarbete",
            "Anställningsbevis för bemanningsuppdrag"
        ],
        step3Reason: "Lagerarbete sker ofta via bemanning eller på obekväma tider. Arbetsgivarintyget behövs för att visa snittarbetstiden inklusive övertid.",
        step4Questions: "Många undrar hur det fungerar om man är anställd av ett bemanningsföretag men saknar uppdrag (garantilön vs a-kassa)."
    },
    "larare": {
        slug: "larare",
        professionName: "Lärare",
        step2List: [
            "Lärarlegitimation (om ej inlämnad)",
            "Arbetsgivarintyg för terminerna",
            "Intyg gällande ferietjänst eller uppehållstjänst"
        ],
        step3Reason: "Lärares ferielön och arbetstid (45,5 h/vecka under termin) gör att arbetsgivarintyget måste fyllas i mycket noggrant för korrekt SGI och a-kassa.",
        step4Questions: "Frågor handlar nästan alltid om 'glappet' på sommaren – om man får a-kassa mellan vår- och hösttermin om anställningen upphör."
    },
    "lastbilschauffor": {
        slug: "lastbilschauffor",
        professionName: "Lastbilschaufför",
        step2List: [
            "Kopia på YKB och körkort",
            "Arbetsgivarintyg från åkeriet",
            "Intyg på traktamenten"
        ],
        step3Reason: "Lastbilschaufförer har ofta traktamenten (skattefria) som inte är a-kassegrundande, medan lönedelen är det. Detta måste särskiljas tydligt.",
        step4Questions: "Många frågar om hur man hanterar väntetid och sovande jour i lastbilen när man fyller i sina kassakort."
    },
    "lokalvardare": {
        slug: "lokalvardare",
        professionName: "Lokalvårdare",
        step2List: [
            "Arbetsgivarintyg från alla städbolag",
            "Anställningsbevis för extrajobb",
            "Tidrapporter för timanställning"
        ],
        step3Reason: "Många lokalvårdare har flera deltidsjobb samtidigt. Arbetsgivarintyg från samtliga arbetsgivare krävs för att 'lägga ihop' tiden till en heltid.",
        step4Questions: "Vanligt är frågor om hur man gör om man blir av med ett av två deltidsjobb (stämpla upp)."
    },
    "lokforare": {
        slug: "lokforare",
        professionName: "Lokförare",
        step2List: [
            "Arbetsgivarintyg från tågoperatören",
            "Schema som visar skiftgång",
            "Eventuellt intyg om säkerhetsklassning"
        ],
        step3Reason: "Lokförare har oregelbundna arbetstider och nattarbete. Intyget säkerställer att all ob-ersättning och tillägg räknas med i lönen.",
        step4Questions: "Frågor rör ofta hur man redovisar jourtid eller beredskap i hemmet på kassakorten."
    },
    "montor": {
        slug: "montor",
        professionName: "Montör",
        step2List: [
            "Arbetsgivarintyg från industrin/fabriken",
            "Intyg om skiftform (2-skift, 3-skift etc.)",
            "Information om eventuellt ackord"
        ],
        step3Reason: "För montörer inom industrin med skiftgång eller produktionsbonusar (ackord) är det viktigt att snittinkomsten speglar alla tillägg.",
        step4Questions: "Många undrar hur konjunkturvarsel och korttidspermittering påverkar rätten till a-kassa och ersättningsnivån."
    },
    "projektledare": {
        slug: "projektledare",
        professionName: "Projektledare",
        step2List: [
            "Arbetsgivarintyg för projektanställningar",
            "Kopia på kontrakt för specifika projekt",
            "Intyg om bonusar eller slutvederlag"
        ],
        step3Reason: "Projektledare har ofta tidsbegränsade anställningar. Det är viktigt att intyget täcker även 'glapp' mellan projekt om anställningen löpt på.",
        step4Questions: "Frågor gäller ofta hur avgångsvederlag eller 'outplacement'-stöd påverkar när a-kassan kan börja betalas ut."
    },
    "saljare": {
        slug: "saljare",
        professionName: "Säljare",
        step2List: [
            "Arbetsgivarintyg med tydlig specifikation av provision",
            "Lönespecifikationer för de senaste 12 månaderna",
            "Eventuellt intyg om tjänstebilsvärde"
        ],
        step3Reason: "För säljare består lönen ofta av en stor rörlig del (provision). Arbetsgivarintyget måste visa den totala bruttolönen, inte bara grundlönen.",
        step4Questions: "Många säljare undrar hur provision som betalas ut i efterskott (när man är arbetslös) påverkar ersättningen."
    },
    "serveringspersonal": {
        slug: "serveringspersonal",
        professionName: "Serveringspersonal",
        step2List: [
            "Arbetsgivarintyg från alla restauranger/krogar",
            "Intyg för extrajobb och eventuella catering-uppdrag",
            "Tidrapporter för timanställning"
        ],
        step3Reason: "Branschen har många timanställningar och extrajobb. Du måste samla intyg från ALLA arbetsgivare för att få ihop till ett arbetsvillkor.",
        step4Questions: "Vanligaste frågan är om dricks räknas in i a-kassan (oftast gör den inte det) och hur man stämplar vid delat skift."
    },
    "sjukskoterska": {
        slug: "sjukskoterska",
        professionName: "Sjuksköterska",
        step2List: [
            "Legitimationsbevis (HOSP)",
            "Arbetsgivarintyg från region, kommun eller bemanningsbolag",
            "Intyg på all ob-ersättning"
        ],
        step3Reason: "Sjuksköterskor har mycket OB och övertid. Arbetsgivarintyget måste specificera detta så du inte får för låg dagpenning baserat på bara grundlön.",
        step4Questions: "Frågor handlar ofta om hur det fungerar om man 'hoppar in' extra via bemanningsföretag samtidigt som man stämplar."
    },
    "snickare": {
        slug: "snickare",
        professionName: "Snickare",
        step2List: [
            "Arbetsgivarintyg från byggfirma",
            "Yrkesbevis",
            "Information om resetillägg och verktygsersättning"
        ],
        step3Reason: "Snickare har ofta ackord, reseersättningar och traktamenten. Det är viktigt att bara den skattepliktiga lönen ligger till grund för ersättningen.",
        step4Questions: "Många frågar om hur säsongsvariationer (vinteruppehåll) hanteras och om man får bygga på sitt eget hus med a-kassa."
    },
    "socialsekreterare": {
        slug: "socialsekreterare",
        professionName: "Socialsekreterare",
        step2List: [
            "Examensbevis (socionom)",
            "Arbetsgivarintyg från kommun/stadsdelsförvaltning",
            "Anställningsbevis"
        ],
        step3Reason: "Socialsekreterare byter ibland mellan kommuner eller går över till bemanningsföretag. Intygen måste täcka hela perioden för att undvika glapp i a-kassegrundande tid.",
        step4Questions: "Frågor rör ofta karenstid om man sagt upp sig själv på grund av hög arbetsbelastning (giltig anledning prövas alltid individuellt)."
    },
    "svetsare": {
        slug: "svetsare",
        professionName: "Svetsare",
        step2List: [
            "Arbetsgivarintyg från verkstad/industri",
            "Svetslicenser (kopia)",
            "Intyg om skiftgång och OB"
        ],
        step3Reason: "Svetsare har ofta specialtillägg eller arbetar på traktamente vid reserjobb. Det är viktigt att lön och kostnadsersättning särskiljs på intyget.",
        step4Questions: "Många svetsare arbetar periodvis ('stoppjobb') och undrar hur man stämplar däremellan utan att förlora sin SGI."
    },
    "taxichauffor": {
        slug: "taxichauffor",
        professionName: "Taxichaufför",
        step2List: [
            "Taxiförarlegitimation (kopia)",
            "Arbetsgivarintyg från åkeriet",
            "Lönespecifikationer som visar provision"
        ],
        step3Reason: "Taxichaufförer har nästan alltid provisionslön. Arbetsgivarintyget måste visa hur mycket du faktiskt tjänat per månad, inte bara procenten.",
        step4Questions: "Den absolut vanligaste frågan är hur a-kassan beräknas när inkomsten varierar kraftigt från månad till månad."
    },
    "underskoterska": {
        slug: "underskoterska",
        professionName: "Undersköterska",
        step2List: [
            "Arbetsgivarintyg från kommun/landsting/privat vårdgivare",
            "Tidrapporter för timvikariat (LAS-dagar)",
            "Intyg om OB-ersättning"
        ],
        step3Reason: "Många undersköterskor har 'staplade' vikariat. Arbetsgivarintyget är beviset för att du jobbat tillräckligt mycket för att få a-kassa.",
        step4Questions: "Frågor rör ofta hur många timmar man får jobba extra utan att a-kassan dras in och hur man fyller i deltidsarbete."
    },
    "verktygsmakare": {
        slug: "verktygsmakare",
        professionName: "Verktygsmakare",
        step2List: [
            "Arbetsgivarintyg från industrin",
            "Yrkesbevis eller utbildningsbevis",
            "Information om skiftform"
        ],
        step3Reason: "Som specialist inom industrin har verktygsmakare ofta högre lön och tillägg. Intyget säkerställer att du når taket i a-kassan om du har rätt till det.",
        step4Questions: "Vanliga frågor gäller permitteringar inom fordonsindustrin och hur det samspelar med a-kassa."
    }
};
