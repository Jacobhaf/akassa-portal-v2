export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string; // HTML content or markdown
  image: string;
  publishedAt: string;
}

export const articles: Article[] = [
  {
    slug: "vad-ar-akassa",
    title: "Vad är a-kassa och hur fungerar den?",
    summary: "En heltäckande guide om det svenska trygghetssystemet. Lär dig skillnaden mellan grundförsäkring och inkomstbortfallsförsäkring, och hur du säkrar din ekonomiska framtid.",
    image: "/artiklar/akassa-grundguide.png",
    publishedAt: "2023-11-15",
    content: `
      <p class="lead">Att bli medlem i en a-kassa är ett av de viktigaste stegen du kan ta för din ekonomiska trygghet. Men hur fungerar systemet egentligen, och vad är skillnaden på att bara "få pengar" och att ha en riktig inkomstförsäkring? Här går vi igenom allt du behöver veta.</p>

      <h2>Två delar av försäkringen</h2>
      <p>Den svenska arbetslöshetsförsäkringen består av två huvuddelar. Det är viktigt att förstå skillnaden, då det avgör hur mycket pengar du får om du blir av med jobbet.</p>
      
      <h3>1. Grundförsäkringen</h3>
      <p>Detta är en "bottenplatta" som gäller för alla som uppfyller arbetsvillkoret, oavsett om du är medlem i en a-kassa eller inte. Ersättningen är dock låg och baseras inte på din tidigare lön.</p>
      <ul>
        <li>Gäller från att du fyllt 20 år.</li>
        <li>Ger en lägre ersättning per dag.</li>
        <li>Utbetalas av Alfa-kassan.</li>
      </ul>

      <h3>2. Inkomstbortfallsförsäkringen (Medlemskap)</h3>
      <p>Detta är den del du får tillgång till genom att <strong>aktivt gå med</strong> i en a-kassa. Här baseras ersättningen på din faktiska lön, vilket gör att du kan behålla en betydligt större del av din levnadsstandard.</p>
      <ul>
        <li>Kräver medlemskap i minst 12 månader.</li>
        <li>Kan ge upp till 80% av din lön (upp till taket).</li>
        <li>En förutsättning för många privata inkomstförsäkringar.</li>
      </ul>

      <h2>Vem kan gå med i en a-kassa?</h2>
      <p>I princip alla som arbetar i Sverige kan gå med i en a-kassa. Huvudregeln är att du ska tillhöra a-kassans verksamhetsområde. Det finns:</p>
      <ol>
        <li><strong>Yrkes- eller branschspecifika a-kassor:</strong> T.ex. för lärare, byggnadsarbetare, eller elektriker. Dessa har ofta bäst koll på just din arbetsmarknad.</li>
        <li><strong>Tjänstemanna-a-kassor:</strong> T.ex. Unionens a-kassa eller Akademikernas a-kassa, som täcker breda grupper av tjänstemän och akademiker.</li>
        <li><strong>Företagar-a-kassor:</strong> Specialiserade på egenföretagare.</li>
        <li><strong>Alfa-kassan:</strong> Öppen för alla yrkesgrupper, men är inte kopplad till något fackförbund.</li>
      </ol>

      <h2>Så här ansöker du om ersättning</h2>
      <p>Om olyckan är framme och du blir uppsagd, följ dessa steg för att inte missa någon ersättning:</p>
      <ol>
        <li><strong>Dag 1:</strong> Skriv in dig som arbetssökande på Arbetsförmedlingen. Detta är absolut kritiskt – gör du det inte första dagen får du ingen ersättning för den dagen.</li>
        <li><strong>Ansök hos din a-kassa:</strong> Logga in på din a-kassas "Mina Sidor" och fyll i ansökan om ersättning.</li>
        <li><strong>Skicka in intyg:</strong> Du behöver arbetsgivarintyg från din tidigare arbetsgivare. Be om detta så snart som möjligt.</li>
        <li><strong>Tidrapportera:</strong> Skicka in dina kassakort löpande varannan vecka.</li>
      </ol>
    `
  },
  {
    slug: "vilken-akassa-passar-mig",
    title: "Guide: Hitta rätt a-kassa för ditt yrke",
    summary: "Det finns över 20 olika a-kassor i Sverige. Vilken ska du välja? Vi hjälper dig att navigera i djungeln och hitta rätt kassa för din yrkeskategori.",
    image: "/artiklar/valja-ratt-akassa.png",
    publishedAt: "2023-11-20",
    content: `
      <p class="lead">Att välja rätt a-kassa handlar inte bara om att betala en avgift. Det handlar om att välja en organisation som förstår din bransch och kan ge dig rätt stöd. Här är guiden som hjälper dig att välja rätt.</p>

      <h2>Varför ska jag välja en specifik a-kassa?</h2>
      <p>Många tror att "a-kassa som a-kassa" gäller, men det finns fördelar med att välja rätt. En a-kassa som är specialiserad på din bransch har handläggare som förstår dina anställningsvillkor, vilket kan leda till smidigare hantering av ditt ärende om du har oregelbundna arbetstider, provision eller andra specifika villkor.</p>

      <h2>Vanliga a-kassor per yrkesområde</h2>

      <h3>För Akademiker</h3>
      <p><strong>Akademikernas a-kassa (AEA)</strong> är det självklara valet om du har 180 högskolepoäng eller mer, eller studerar. Det är Sveriges största a-kassa med över 750 000 medlemmar. De är kända för låg avgift och effektiv handläggning.</p>

      <h3>För Tjänstemän</h3>
      <p>Om du jobbar på kontor i privat sektor är <strong>Unionens a-kassa</strong> ofta rätt val. De organiserar allt från administratörer och säljare till IT-konsulter och chefer. Även <strong>Ledarnas a-kassa</strong> är ett alternativ om du har en chefsposition.</p>

      <h3>För Vård och Omsorg</h3>
      <p><strong>Kommunals a-kassa</strong> är störst inom kommunala yrken som undersköterska, barnskötare och personlig assistent. Arbetar du däremot som sjuksköterska eller läkare hör du oftast till Akademikernas a-kassa.</p>

      <h3>För Bygg och Hantverk</h3>
      <p>Här finns flera specialiserade kassor som <strong>Byggnads a-kassa</strong>, <strong>Elektrikernas a-kassa</strong> och <strong>Målarnas a-kassa</strong>. De har stenkoll på ackord, säsongsanställningar och branschspecifika avtal.</p>

      <h3>För Egenföretagare</h3>
      <p>Som företagare har du specifika regler kring "vilande företag" för att få ersättning. <strong>Småföretagarnas a-kassa (Småa)</strong> är experter på detta och kan guida dig rätt så att du inte riskerar din ersättning.</p>

      <h2>Kan jag vara med i vilken a-kassa som helst?</h2>
      <p>Nej, de flesta a-kassor har stadgar som reglerar vem som får bli medlem. Om du byter bransch helt (t.ex. från lärare till snickare) måste du oftast byta a-kassa. Det är dock enkelt gjort och din intjänade medlemstid följer med dig så länge det inte blir något glapp.</p>

      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-6">
        <h3 class="font-bold text-lg mb-2">Tips!</h3>
        <p>Är du osäker? De flesta a-kassor har en "Bli medlem"-sida där du kan se exakt vilka yrken de organiserar. Eller använd vår sökfunktion här på sajten för att hitta rätt direkt.</p>
      </div>
    `
  },
  {
    slug: "ersattning-karens-villkor",
    title: "Hur mycket får jag i ersättning? (Belopp, Tak & Karens)",
    summary: "Vi dyker ner i detaljerna kring dagpenning, inkomsttak och hur 80%-regeln faktiskt fungerar i praktiken år 2025.",
    image: "/artiklar/ersattning-karens.png",
    publishedAt: "2023-11-25",
    content: `
      <p class="lead">När lönen försvinner är a-kassan din livlina. Men hur mycket pengar handlar det egentligen om? Och vad innebär de olika begreppen som "tak" och "karens"? Vi reder ut begreppen.</p>

      <h2>Så beräknas din ersättning</h2>
      <p>Ersättningen från a-kassan baseras på din genomsnittliga inkomst de senaste 12 månaderna innan du blev arbetslös. Grundregeln är enkel:</p>
      <ul>
        <li><strong>Dag 1-100:</strong> 80% av din tidigare lön (upp till taket).</li>
        <li><strong>Dag 101-200:</strong> 80% av din tidigare lön (upp till taket).</li>
        <li><strong>Dag 201-300:</strong> 70% av din tidigare lön (upp till taket).</li>
      </ul>

      <h2>Vad ligger taket på 2025?</h2>
      <p>Det finns ett maximalt belopp du kan få, oavsett hur mycket du tjänade innan. Detta kallas för "taket" i försäkringen.</p>
      <ul>
        <li>Högsta dagpenning är ca <strong>1 200 kr/dag</strong> före skatt de första 100 dagarna.</li>
        <li>Detta motsvarar en månadslön på upp till ca <strong>33 000 kr</strong>.</li>
      </ul>
      <p>Tjänar du mer än 33 000 kr i månaden? Då får du inte ut 80% av hela din lön från enbart a-kassan. För att skydda lönen ovanför taket behöver du en <strong>inkomstförsäkring</strong>, vilket ofta ingår i fackligt medlemskap eller kan tecknas separat.</p>

      <h2>Karensdagar – "Självrisken"</h2>
      <p>När du blir arbetslös får du inte ersättning från första dagen. De inledande dagarna kallas karensdagar (oftast 2 dagar). Dessa dagar fungerar som en självrisk där du inte får någon utbetalning, men de räknas inte heller av från dina 300 ersättningsdagar.</p>

      <h2>Viktiga villkor för att få full ersättning</h2>
      <p>För att få den inkomstbaserade ersättningen måste du uppfylla två huvudvillkor:</p>
      
      <h3>1. Medlemsvillkoret</h3>
      <p>Du ska ha varit medlem i a-kassan i minst <strong>12 sammanhängande månader</strong> innan arbetslösheten. Har du varit medlem kortare tid kan du bara få grundersättning.</p>

      <h3>2. Arbetsvillkoret</h3>
      <p>Du måste ha arbetat i en viss omfattning före arbetslösheten. Vanligtvis krävs att du jobbat minst 80 timmar/månad i minst 6 månader under det senaste året, eller totalt 480 timmar under 6 sammanhängande månader.</p>
    `
  },
  {
    slug: "vanliga-misstag",
    title: "5 vanliga misstag som kan kosta dig din ersättning",
    summary: "Se till att du inte går miste om pengar i onödan. Här listar vi de vanligaste fallgroparna och hur du enkelt undviker dem.",
    image: "/artiklar/vanliga-misstag.png",
    publishedAt: "2023-11-30",
    content: `
      <p class="lead">Att hantera myndigheter och försäkringskassor kan vara krångligt. Tyvärr leder små administrativa missar ofta till att man förlorar rätten till ersättning eller får den försent. Här är checklistan för att göra rätt.</p>

      <h2>1. Du väntar med att anmäla dig till Arbetsförmedlingen</h2>
      <p class="text-red-700 font-medium">Konsekvens: Ingen ersättning för dagarna du missat.</p>
      <p>Detta är det absolut vanligaste och dyraste misstaget. Du måste skriva in dig på Arbetsförmedlingen din <strong>första arbetslösa dag</strong>. Om din sista anställningsdag var en fredag, skriv in dig på måndagen. Väntar du till onsdagen så får du noll kronor för måndag och tisdag.</p>

      <h2>2. "Glapp" vid byte av a-kassa</h2>
      <p class="text-red-700 font-medium">Konsekvens: Du måste börja om på nytt med 12 månaders kvalificeringstid.</p>
      <p>Om du byter a-kassa är det kritiskt att det inte blir en enda dags uppehåll mellan medlemskapen. Begär utträde ur den gamla kassan den sista i månaden (t.ex. 31 januari) och inträde i den nya den första i nästa månad (t.ex. 1 februari). De flesta a-kassor har fullmakt för att hjälpa dig med bytet – använd den!</p>

      <h2>3. Slarv med tidrapporter (Kassakort)</h2>
      <p class="text-red-700 font-medium">Konsekvens: Försenad utbetalning.</p>
      <p>Du måste löpande rapportera vad du gjort de senaste två veckorna. Slarvar du med att skicka in dessa "kassakort" kan inte a-kassan betala ut pengarna, vilket leder till onödig väntan.</p>

      <h2>4. Missad aktivitetsrapport</h2>
      <p class="text-red-700 font-medium">Konsekvens: Varning eller avstängning från ersättning.</p>
      <p>Varje månad (mellan den 1:a och 14:e) måste du rapportera till Arbetsförmedlingen vilka jobb du sökt och andra aktiviteter du genomfört. Glömmer du detta får du en varning, och vid upprepade tillfällen dras ersättningen in.</p>

      <h2>5. Du säger upp dig själv utan giltigt skäl</h2>
      <p class="text-red-700 font-medium">Konsekvens: 45 dagars avstängning (karens).</p>
      <p>Om du säger upp dig själv blir du som regel avstängd från ersättning i 45 ersättningsdagar (ca 10 veckor utan pengar). Det finns undantag (giltiga skäl), t.ex. om du blir sjuk av jobbet eller om arbetsgivaren inte betalar lön, men detta måste bevisas noga.</p>
    `
  },
  {
    slug: "ekonomi-kris-akassa",
    title: "När ekonomin rasar – så överlever du jobbförlusten",
    summary: "Konkreta tips och strategier för att hantera privatekonomin när inkomsten plötsligt försvinner. Budgettips, prioritering av skulder och vägar till hjälp.",
    image: "/artiklar/ekonomi-kris.png",
    publishedAt: "2023-12-05",
    content: `
      <p class="lead">Att förlora jobbet är en av livets stora stressfaktorer. Utöver oron för karriären kommer ofta en omedelbar ekonomisk press. Här är en handlingsplan för att ta kontroll över situationen.</p>

      <h2>1. Gör en krisbudget direkt</h2>
      <p>Vänta inte och se "hur det går". Sätt dig ner omedelbart och lista:</p>
      <ul>
        <li><strong>Inkomster:</strong> Vad får du ut från a-kassa? Inkomstförsäkring? Avgångsvederlag?</li>
        <li><strong>Fasta utgifter:</strong> Hyra, el, försäkringar, lån.</li>
        <li><strong>Rörliga utgifter:</strong> Mat, nöjen, streamingtjänster.</li>
      </ul>
      <p>Stryk allt som inte är nödvändigt. Pausa streamingtjänster, säg upp gymkortet om du kan träna ute, och laga matlådor.</p>

      <h2>2. Prioritera dina räkningar</h2>
      <p>Om pengarna inte räcker till allt, måste du prioritera rätt:</p>
      <ol>
        <li><strong>Boende & El:</strong> Detta måste betalas för att du inte ska bli vräkt.</li>
        <li><strong>A-kasseavgiften:</strong> Missar du denna kan du åka ur a-kassan och förlora din ersättning. Betala alltid denna!</li>
        <li><strong>Mat & Medicin:</strong> Grundläggande behov.</li>
        <li><strong>Lån & Krediter:</strong> Kontakta banken om du har svårt att betala. Ofta kan man få amorteringsfritt en period.</li>
      </ol>

      <h2>3. Hantera skulder proaktivt</h2>
      <p>Det värsta du kan göra är att stoppa huvudet i sanden (den så kallade "strutsmetoden"). Skulder försvinner inte, de växer med ränta och avgifter.</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg shadow-sm">
        <h3 class="text-red-900 font-bold text-xl mb-3">Varningssignal!</h3>
        <p class="text-red-800 mb-4">
          Börjar du betala gamla lån med nya snabblån? Eller har du inkassokrav som staplas på hög? Då måste du agera nu innan det går till Kronofogden.
        </p>
        <p class="text-red-800 mb-6">
          Det finns professionell hjälp att få för att sanera sin ekonomi och få en nystart. Det är inget att skämmas över – det är ett ansvarsfullt sätt att ta tag i sitt liv.
        </p>
        <a 
          href="https://skuldregistret.se/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
        >
          Få kostnadsfri hjälp hos Skuldregistret.se &rarr;
        </a>
      </div>

      <h2>4. Sök bostadsbidrag</h2>
      <p>Många vet inte om att de kan ha rätt till bostadsbidrag om inkomsten sjunker drastiskt. Gå in på Försäkringskassans hemsida och gör en provberäkning. Det kan handla om tusenlappar i månaden som gör stor skillnad.</p>

      <h2>5. Kom ihåg: Detta är tillfälligt</h2>
      <p>Arbetslöshet är en period i livet, inte ditt liv. Genom att ta kontroll över ekonomin minskar du stressen och kan lägga energin på det som faktiskt tar dig därifrån: att nätverka och söka nya spännande jobb.</p>
    `
  }
];
