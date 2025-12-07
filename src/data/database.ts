import { Akassa, Yrke } from "@/types";

export const akassor: Akassa[] = [
    {
        id: "aea",
        members: 760000,
        pricePerMonth: 130,
        employerTypes: ["privat_borsnoterat", "kommun_region", "myndighet", "eget_foretag"],
        partner: true,
        maxCompPerMonth: 26400,
        name: "Akademikernas a-kassa",
        shortName: "AEA",
        slug: "akademikernas-a-kassa",
        website: "https://www.aea.se",
        phone: "08-412 33 00",
        email: "registrator@aea.se",
        primaryIndustries: [
            "Akademiker med minst 180 hp eller kandidatexamen",
            "Studenter med mål 180 hp",
            "Saco-medlemmar",
            "Vårdförbundet-medlemmar",
        ],
        membershipFee: "100 kr/mån",
        exampleJobs: [
            "Systemutvecklare",
            "Webbutvecklare",
            "HR-specialist",
            "HR-chef",
            "Personalvetare",
            "Tandhygienist",
            "Tandläkare",
            "Apotekare",
            "Lärare",
            "Ingenjörer",
            "Sjuksköterskor",
            "IT-konsulter",
            "Ekonomer",
        ],
    },
    {
        id: "alfa",
        members: 160000,
        pricePerMonth: 170,
        employerTypes: ["privat_borsnoterat", "kommun_region", "myndighet", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Alfa-kassan",
        slug: "alfa-kassan",
        website: "https://www.alfakassan.se",
        phone: "0771-55 00 99",
        email: "post@alfakassan.se",
        primaryIndustries: [
            "Alla branscher",
            "Anställda",
            "Företagare oavsett yrke",
        ],
        membershipFee: "130 kr/mån",
        exampleJobs: [
            "Lagerarbetare",
            "Butiksbiträden",
            "Administratörer",
            "Byggnadsarbetare",
            "Kockar",
        ],
    },
    {
        id: "seko",
        members: 110000,
        pricePerMonth: 149,
        employerTypes: ["privat_borsnoterat", "myndighet"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Seko a-kassa",
        slug: "seko-akassa",
        website: "https://www.sekosakassa.se",
        phone: "020-67 80 00",
        email: "akassan@seko.se",
        primaryIndustries: [
            "Post",
            "Tele och data",
            "Järnväg",
            "Sjöfart",
            "Energi",
            "Försvar",
            "Statsförvaltning",
        ],
        membershipFee: "149 kr/mån",
        exampleJobs: [
            "Brevsorterare",
            "Lokförare",
            "Brevbärare",
            "Matroser",
            "VVS-montörer",
            "Kriminalvårdare",
        ],
    },
    {
        id: "vision",
        members: 78000,
        pricePerMonth: 150,
        employerTypes: ["kommun_region", "myndighet"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Vision a-kassa",
        slug: "vision-akassa",
        website: "https://www.akassanvision.se",
        phone: "0771-773 800",
        email: "info@akassanvision.se",
        primaryIndustries: [
            "Administration i kommun och region",
            "Vård skola omsorg",
            "Svenska kyrkan",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Tandsköterska",
            "Vårdcentraladministratör",
            "Socialsekreterare",
            "Biståndshandläggare",
            "Kuratorer",
            "Förvaltningschefer",
            "Behandlingsassistenter",
        ],
    },
    {
        id: "byggnads",
        members: 130000,
        pricePerMonth: 110,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Byggnads a-kassa",
        slug: "byggnads-akassa",
        website: "https://www.byggnadsakassa.se",
        phone: "010-601 18 00",
        email: "a-kassan@byggnads.se",
        primaryIndustries: [
            "Byggnadsarbetare",
            "Målare",
            "Småföretagare i måleri",
        ],
        membershipFee: "110 kr/mån med fack, 119 kr/mån utan",
        exampleJobs: [
            "Maskinförare (bygg/anläggning)",
            "Snickare",
            "Betongarbetare",
            "Murare",
            "Målare",
            "Golvläggare",
        ],
    },
    {
        id: "eak",
        members: 25000,
        pricePerMonth: 100,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Elektrikernas a-kassa",
        slug: "elektrikernas-akassa",
        website: "https://www.elektrikernasakassa.se",
        phone: "0771-469 100",
        email: "eak@sef.se",
        primaryIndustries: [
            "Elteknik",
            "Starkström",
            "Svagström",
            "Hiss",
            "Data",
            "Larm",
            "Energi",
        ],
        membershipFee: "100 kr/mån",
        exampleJobs: [
            "Behörig elektriker-service",
            "Elektriker",
            "Larmtekniker",
            "Hissmontörer",
            "Data- och IT-montörer",
            "Kraftverksoperatörer",
        ],
    },
    {
        id: "fastighets",
        members: 28000,
        pricePerMonth: 115,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Fastighets a-kassa",
        slug: "fastighets-akassa",
        website: "https://www.fastighetsakassa.se",
        phone: "08-696 11 50",
        email: "a-kassan.fk@fastighets.se",
        primaryIndustries: [
            "Lokalvård",
            "Fastighetsskötsel",
            "Fönsterputs",
            "VVS",
            "Sanering",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Lokalvårdare",
            "Fastighetsskötare",
            "Fönsterputsare",
            "VVS-arbetare",
            "Sanerare",
        ],
    },
    {
        id: "ffak",
        members: 35000,
        pricePerMonth: 115,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Finans- och försäkringsbranschens a-kassa",
        slug: "finans-och-forsakringskassan",
        website: "https://www.ffakassan.se",
        phone: "08-791 17 50",
        email: "fragor@ffakassan.se",
        primaryIndustries: [
            "Finans",
            "Försäkring",
            "Tjänstemän",
            "Företagare i finans och försäkring",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Banktjänstemän",
            "Försäkringsrådgivare",
            "Finansanalytiker",
            "Kundrådgivare",
            "Företagsrådgivare",
        ],
    },
    {
        id: "gs",
        members: 50000,
        pricePerMonth: 150,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "GS a-kassa",
        slug: "gs-akassa",
        website: "https://www.gsakassa.se",
        phone: "010-470 68 00",
        email: "kontakt@gsakassa.se",
        primaryIndustries: [
            "Grafisk industri",
            "Träindustri",
            "Skogsbruk",
            "Tryckerier",
            "Förlag",
            "Sågverk",
        ],
        membershipFee: "1,6% av lön (max 493 kr/mån)",
        exampleJobs: [
            "Sågverksarbetare",
            "Tryckare",
            "Skogsmaskinförare",
            "Trähusmontörer",
            "Förpackningsarbetare",
        ],
    },
    {
        id: "hamn",
        members: 3000,
        pricePerMonth: 145,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Hamnarbetarnas a-kassa",
        slug: "hamnarbetarnas-akassa",
        website: "https://hamnakassa.se",
        phone: "031-51 54 11",
        email: "kontakt@hamnakassa.se",
        primaryIndustries: ["Hamn", "Stuveri", "Magasin", "Godsterminaler"],
        membershipFee: "145 kr/mån",
        exampleJobs: [
            "Hamnarbetare",
            "Terminalarbetare",
            "Godsmagasinspersonal",
            "Lastare",
            "Logistikoperatörer",
        ],
    },
    {
        id: "handels",
        members: 184000,
        pricePerMonth: 165,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Handels a-kassa",
        slug: "handels-akassa",
        website: "https://www.handels.se/akassan",
        phone: "0771-666 444",
        email: "akassan@handels.se",
        primaryIndustries: [
            "Detaljhandel",
            "Partihandel",
            "Folkrörelse",
            "Frisörer",
            "Kultur",
            "Yrkesfiskare",
        ],
        membershipFee: "132 kr/mån",
        exampleJobs: [
            "Butiksledare",
            "E-handelslogistiker",
            "Butikssäljare",
            "Lagerarbetare",
            "Frisörer",
            "Kassapersonal",
            "Kulturarbetare",
        ],
    },
    {
        id: "hrak",
        members: 80000,
        pricePerMonth: 130,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Hotell- och restaurang a-kassa",
        slug: "hrak",
        website: "https://www.hrak.se",
        phone: "0771-435 060",
        email: "akassan@hrak.se",
        primaryIndustries: [
            "Hotell",
            "Restaurang",
            "Kafé",
            "Spa",
            "Catering",
            "Nöjesföretag",
        ],
        membershipFee: "130 kr/mån",
        exampleJobs: [
            "Kallskänka",
            "Kockar",
            "Serveringspersonal",
            "Hotellreceptionister",
            "Hotellstädare",
            "Cateringpersonal",
        ],
    },
    {
        id: "ifmetall",
        members: 270000,
        pricePerMonth: 154,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "IF Metalls a-kassa",
        slug: "if-metalls-akassa",
        website: "https://www.ifmetall.se/akassan",
        phone: "",
        email: "akassan@ifmetall.se",
        primaryIndustries: [
            "Verkstadsindustri",
            "Läkemedelsindustri",
            "Stålindustri",
            "Kemiindustri",
        ],
        membershipFee: "106 kr/mån med fack, 116 kr/mån utan",
        exampleJobs: [
            "Arbetsledare industri",
            "Produktionstekniker",
            "Verktygsmakare",
            "Svetsare",
            "Montörer",
            "Läkemedelsoperatörer",
            "Kemiindustriarbetare",
        ],
    },
    {
        id: "journalist",
        members: 15000,
        pricePerMonth: 135,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Journalisternas a-kassa",
        slug: "journalisternas-akassa",
        website: "https://www.journalisternas-akassa.se",
        phone: "08-613 75 60",
        email: "medlemakassan@sjf.se",
        primaryIndustries: [
            "Journalister anställda",
            "Journalister frilans",
            "Journalister företagare",
        ],
        membershipFee: "135 kr/mån",
        exampleJobs: [
            "Journalister",
            "Fotografer",
            "Redaktörer",
            "Översättare",
            "Frilansskribenter",
        ],
    },
    {
        id: "kommunal",
        members: 600000,
        pricePerMonth: 140,
        employerTypes: ["kommun_region", "privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Kommunals a-kassa",
        slug: "kommunals-akassa",
        website: "https://www.kommunalsakassa.se",
        phone: "010-442 75 00",
        email: "",
        primaryIndustries: [
            "Kommun",
            "Landsting och region",
            "Vård",
            "Skola",
            "Omsorg",
            "Räddningstjänst",
            "Park",
        ],
        membershipFee: "102 kr/mån med fack, 105 kr/mån utan",
        exampleJobs: [
            "Trädgårdsarbetare",
            "Brandman",
            "Undersköterskor",
            "Barnskötare",
            "Kökspersonal",
            "Bussförare",
            "Äldreomsorgspersonal",
        ],
    },
    {
        id: "ledarna",
        members: 90000,
        pricePerMonth: 115,
        employerTypes: ["privat_borsnoterat", "kommun_region", "myndighet", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Ledarnas a-kassa",
        slug: "ledarnas-akassa",
        website: "https://www.ledarnasakassa.se",
        phone: "08-509 319 00",
        email: "akassan@ledarnasakassa.se",
        primaryIndustries: [
            "Chefer",
            "Ledande befattningar",
            "Familjemedlemmar i företag",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Avdelningschefer",
            "Projektledare",
            "Enhetschefer",
            "VD:ar",
            "Teamledare",
        ],
    },
    {
        id: "livs",
        members: 25000,
        pricePerMonth: 112,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Livs a-kassa",
        slug: "livs-akassa",
        website: "https://www.livs-akassa.se",
        phone: "08-796 29 90",
        email: "akassa@livs.se",
        primaryIndustries: ["Livsmedelsindustri"],
        membershipFee: "112 kr/mån",
        exampleJobs: [
            "Livsmedelsindustriarbetare",
            "Bageriarbetare",
            "Slaktare",
            "Konditorer",
            "Mejeriarbetare",
        ],
    },
    {
        id: "la",
        members: 200000,
        pricePerMonth: 110,
        employerTypes: ["kommun_region", "privat_borsnoterat", "myndighet"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Lärarnas a-kassa",
        slug: "lararnas-akassa",
        website: "https://www.lararnasakassa.nu",
        phone: "08-737 65 00",
        email: "",
        primaryIndustries: [
            "Utbildning",
            "Lärare",
            "Fritidspedagoger",
            "Vägledare",
        ],
        membershipFee: "110 kr/mån",
        exampleJobs: [
            "Grundskollärare",
            "Förskollärare",
            "Gymnasielärare",
            "Studie- och yrkesvägledare",
            "Rektorer",
        ],
    },
    {
        id: "pappers",
        members: 14000,
        pricePerMonth: 129,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Pappers a-kassa",
        slug: "pappers-akassa",
        website: "https://www.pappersakassa.se",
        phone: "08-796 61 00",
        email: "ersattningakassan@pappers.se",
        primaryIndustries: ["Pappersindustri", "Massindustri", "Kartongindustri"],
        membershipFee: "129 kr/mån",
        exampleJobs: [
            "Pappersmaskinsoperatörer",
            "Massaarbetare",
            "Kartongtillverkare",
            "Pappersskärare",
            "Tryckpappersarbetare",
        ],
    },
    {
        id: "slak",
        members: 8000,
        pricePerMonth: 140,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "SLAK",
        slug: "slak-akassa",
        website: "https://slf-facket.se",
        phone: "08-408 099 65",
        email: "slak@slf.a.se",
        primaryIndustries: [
            "Skogssektorn",
            "Lantbruk",
            "Miljösektorn",
            "Tjänstemän",
            "Egenföretagare",
        ],
        membershipFee: "1% av lön (max 252 kr/mån)",
        exampleJobs: [
            "Skogskonsulenter",
            "Virkesköpare",
            "Lantbrukskonsulenter",
            "Produktionsledare skog",
            "Distriktschefer lantbruk",
        ],
    },
    {
        id: "smaa",
        members: 120000,
        pricePerMonth: 128,
        employerTypes: ["eget_foretag"],
        partner: true,
        maxCompPerMonth: 26400,
        name: "Småföretagarnas a-kassa",
        slug: "smaforetagarnas-akassa",
        website: "https://www.smakassa.se",
        phone: "08-723 44 00",
        email: "info@smakassa.se",
        primaryIndustries: [
            "Småföretagare",
            "Ägare",
            "VD",
            "Familjemedlemmar i företag",
        ],
        membershipFee: "128 kr/mån",
        exampleJobs: [
            "Ensamföretagare",
            "Butiksägare",
            "Konsulter",
            "Restaurangägare",
            "Taxiföretagare",
        ],
    },
    {
        id: "sts",
        members: 70000,
        pricePerMonth: 110,
        employerTypes: ["myndighet", "privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "STs a-kassa",
        slug: "sts-akassa",
        website: "https://www.stsakassa.se",
        phone: "08-517 590 00",
        email: "ersattning@stsakassa.se",
        primaryIndustries: ["Stat", "Kommun", "Skattefinansierad service"],
        membershipFee: "110 kr/mån",
        exampleJobs: [
            "Larmoperatör (112)",
            "Administratörer stat",
            "Handläggare myndigheter",
            "Arkivarier",
            "IT-support offentlig sektor",
            "Personalhandläggare",
        ],
    },
    {
        id: "sha",
        members: 20000,
        pricePerMonth: 129,
        employerTypes: ["eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Svensk Handels a-kassa",
        slug: "svensk-handels-akassa",
        website: "https://www.akassan.com",
        phone: "08-506 471 00",
        email: "",
        primaryIndustries: [
            "Företagare i handel",
            "Service",
            "Tillverkning",
            "Jordbruk",
        ],
        membershipFee: "129 kr/mån",
        exampleJobs: [
            "Handelsföretagare",
            "Butiksägare",
            "Serviceföretagare",
            "Familjeföretagare handel",
            "Logistikföretagare",
        ],
    },
    {
        id: "saak",
        members: 9500,
        pricePerMonth: 145,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Sveriges arbetares a-kassa",
        slug: "saak",
        website: "https://www.saak.se",
        phone: "08-545 912 50",
        email: "kontakt@saak.se",
        primaryIndustries: [
            "Alla branscher",
            "Anställda",
            "Egenföretagare utan anställda",
        ],
        membershipFee: "135 kr/mån",
        exampleJobs: [
            "Industriarbetare",
            "Tjänstemän",
            "Lagerpersonal",
            "Byggnadsarbetare",
            "Servicearbetare",
        ],
    },
    {
        id: "saljarnas",
        members: 40000,
        pricePerMonth: 130,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Säljarnas a-kassa",
        slug: "saljarnas-akassa",
        website: "https://www.saljarnas-akassa.se",
        phone: "08-617 02 60",
        email: "info@saljarnas-akassa.se",
        primaryIndustries: [
            "Säljare av varor",
            "Säljare av tjänster",
            "Anställda säljare",
            "Egenföretagare säljare",
        ],
        membershipFee: "130 kr/mån",
        exampleJobs: [
            "Fältsäljare",
            "Butikssäljare",
            "Marknadsförare",
            "Account managers",
            "Kundansvariga",
        ],
    },
    {
        id: "transport",
        members: 60000,
        pricePerMonth: 120,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Transports a-kassa",
        slug: "transports-akassa",
        website: "https://www.transportsakassa.se",
        phone: "0771-40 30 01",
        email: "",
        primaryIndustries: ["Transportverksamhet"],
        membershipFee: "120 kr/mån",
        exampleJobs: [
            "Chaufför lätt lastbil",
            "Väktare",
            "Lastbilschaufförer",
            "Bussförare",
            "Terminalarbetare",
            "Taxichaufförer",
            "Flygmekaniker",
        ],
    },
    {
        id: "unionen",
        members: 750000,
        pricePerMonth: 160,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: true,
        maxCompPerMonth: 26400,
        name: "Unionens a-kassa",
        slug: "unionens-akassa",
        website: "https://www.unionensakassa.se",
        phone: "0770-77 77 88",
        email: "",
        primaryIndustries: [
            "Tjänstemän i teknik",
            "Handel",
            "Transport",
            "Ideella organisationer",
            "Media",
            "Apotek",
        ],
        membershipFee: "Ca 120 kr/mån",
        exampleJobs: [
            "Receptionist (kontor)",
            "Kontorist",
            "Apotekstekniker",
            "Kundtjänstmedarbetare",
            "Telefonsäljare",
            "HR-administratör",
            "Servicetekniker maskiner",
            "Ingenjörer",
            "Ekonomer",
            "Säljare tjänstemän",
            "IT-konsulter",
            "Projektledare",
        ],
    },
];

export const yrken: Yrke[] = [
    {
        slug: "account-manager",
        name: "Account manager",
        searchPhrase: "account manager a-kassa",
        recommendedAkassaId: "saljarnas",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "administrator",
        name: "Administratör",
        searchPhrase: "administratör a-kassa",
        recommendedAkassaId: "sts",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "administrator-stat",
        name: "Administratör stat",
        searchPhrase: "administratör stat a-kassa",
        recommendedAkassaId: "sts",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "arkivarie",
        name: "Arkivarie",
        searchPhrase: "arkivarie a-kassa",
        recommendedAkassaId: "sts",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "avdelningschef",
        name: "Avdelningschef",
        searchPhrase: "avdelningschef a-kassa",
        recommendedAkassaId: "ledarna",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "bageriarbetare",
        name: "Bageriarbetare",
        searchPhrase: "bageriarbetare a-kassa",
        recommendedAkassaId: "livs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "banktjansteman",
        name: "Banktjänsteman",
        searchPhrase: "banktjänsteman a-kassa",
        recommendedAkassaId: "ffak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "barnskotare",
        name: "Barnskötare",
        searchPhrase: "barnskötare a-kassa",
        recommendedAkassaId: "kommunal",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "behandlingsassistent",
        name: "Behandlingsassistent",
        searchPhrase: "behandlingsassistent a-kassa",
        recommendedAkassaId: "vision",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "betongarbetare",
        name: "Betongarbetare",
        searchPhrase: "betongarbetare a-kassa",
        recommendedAkassaId: "byggnads",
        image: "/assets/images/categories/construction.png",
    },


    {
        slug: "bistandshandlaggare",
        name: "Biståndshandläggare",
        searchPhrase: "biståndshandläggare a-kassa",
        recommendedAkassaId: "vision",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "brevbarare",
        name: "Brevbärare",
        searchPhrase: "brevbärare a-kassa",
        recommendedAkassaId: "seko",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "bussforare",
        name: "Bussförare",
        searchPhrase: "bussförare a-kassa",
        recommendedAkassaId: "kommunal",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "butiksbitrade",
        name: "Butiksbiträde",
        searchPhrase: "butiksbiträde a-kassa",
        recommendedAkassaId: "alfa",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "butikssaljare",
        name: "Butikssäljare",
        searchPhrase: "butikssäljare a-kassa",
        recommendedAkassaId: "handels",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "butiksagare",
        name: "Butiksägare",
        searchPhrase: "butiksägare a-kassa",
        recommendedAkassaId: "smaa",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "byggnadsarbetare",
        name: "Byggnadsarbetare",
        searchPhrase: "byggnadsarbetare a-kassa",
        recommendedAkassaId: "byggnads",
        image: "/assets/images/categories/construction.png",
    },


    {
        slug: "cateringpersonal",
        name: "Cateringpersonal",
        searchPhrase: "cateringpersonal a-kassa",
        recommendedAkassaId: "hrak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "data-och-it-montor",
        name: "Data- och IT-montör",
        searchPhrase: "data- och it-montör a-kassa",
        recommendedAkassaId: "eak",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "distriktschef-lantbruk",
        name: "Distriktschef lantbruk",
        searchPhrase: "distriktschef lantbruk a-kassa",
        recommendedAkassaId: "slak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "ekonom",
        name: "Ekonom",
        searchPhrase: "ekonom a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/professions/ekonom.png",
    },


    {
        slug: "elektriker",
        name: "Elektriker",
        searchPhrase: "elektriker a-kassa",
        recommendedAkassaId: "eak",
        image: "/assets/images/professions/elektriker.png",
    },


    {
        slug: "enhetschef",
        name: "Enhetschef",
        searchPhrase: "enhetschef a-kassa",
        recommendedAkassaId: "ledarna",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "ensamforetagare",
        name: "Ensamföretagare",
        searchPhrase: "ensamföretagare a-kassa",
        recommendedAkassaId: "smaa",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "familjeforetagare-handel",
        name: "Familjeföretagare handel",
        searchPhrase: "familjeföretagare handel a-kassa",
        recommendedAkassaId: "sha",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "fastighetsskotare",
        name: "Fastighetsskötare",
        searchPhrase: "fastighetsskötare a-kassa",
        recommendedAkassaId: "fastighets",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "finansanalytiker",
        name: "Finansanalytiker",
        searchPhrase: "finansanalytiker a-kassa",
        recommendedAkassaId: "ffak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "flygmekaniker",
        name: "Flygmekaniker",
        searchPhrase: "flygmekaniker a-kassa",
        recommendedAkassaId: "transport",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "fotograf",
        name: "Fotograf",
        searchPhrase: "fotograf a-kassa",
        recommendedAkassaId: "journalist",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "frilansskribent",
        name: "Frilansskribent",
        searchPhrase: "frilansskribent a-kassa",
        recommendedAkassaId: "journalist",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "frisor",
        name: "Frisör",
        searchPhrase: "frisör a-kassa",
        recommendedAkassaId: "handels",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "faltsaljare",
        name: "Fältsäljare",
        searchPhrase: "fältsäljare a-kassa",
        recommendedAkassaId: "saljarnas",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "forpackningsarbetare",
        name: "Förpackningsarbetare",
        searchPhrase: "förpackningsarbetare a-kassa",
        recommendedAkassaId: "gs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "forskollarare",
        name: "Förskollärare",
        searchPhrase: "förskollärare a-kassa",
        recommendedAkassaId: "la",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "forsakringsradgivare",
        name: "Försäkringsrådgivare",
        searchPhrase: "försäkringsrådgivare a-kassa",
        recommendedAkassaId: "ffak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "foretagsradgivare",
        name: "Företagsrådgivare",
        searchPhrase: "företagsrådgivare a-kassa",
        recommendedAkassaId: "ffak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "forvaltningschef",
        name: "Förvaltningschef",
        searchPhrase: "förvaltningschef a-kassa",
        recommendedAkassaId: "vision",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "godsmagasinspersonal",
        name: "Godsmagasinspersonal",
        searchPhrase: "godsmagasinspersonal a-kassa",
        recommendedAkassaId: "hamn",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "golvlaggare",
        name: "Golvläggare",
        searchPhrase: "golvläggare a-kassa",
        recommendedAkassaId: "byggnads",
        image: "/assets/images/categories/construction.png",
    },


    {
        slug: "grundskollarare",
        name: "Grundskollärare",
        searchPhrase: "grundskollärare a-kassa",
        recommendedAkassaId: "la",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "gymnasielarare",
        name: "Gymnasielärare",
        searchPhrase: "gymnasielärare a-kassa",
        recommendedAkassaId: "la",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "hamnarbetare",
        name: "Hamnarbetare",
        searchPhrase: "hamnarbetare a-kassa",
        recommendedAkassaId: "hamn",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "handelsforetagare",
        name: "Handelsföretagare",
        searchPhrase: "handelsföretagare a-kassa",
        recommendedAkassaId: "sha",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "handlaggare-myndighet",
        name: "Handläggare myndighet",
        searchPhrase: "handläggare myndighet a-kassa",
        recommendedAkassaId: "sts",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "hissmontor",
        name: "Hissmontör",
        searchPhrase: "hissmontör a-kassa",
        recommendedAkassaId: "eak",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "hotellreceptionist",
        name: "Hotellreceptionist",
        searchPhrase: "hotellreceptionist a-kassa",
        recommendedAkassaId: "hrak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "hotellstadare",
        name: "Hotellstädare",
        searchPhrase: "hotellstädare a-kassa",
        recommendedAkassaId: "hrak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "industriarbetare",
        name: "Industriarbetare",
        searchPhrase: "industriarbetare a-kassa",
        recommendedAkassaId: "saak",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "ingenjor",
        name: "Ingenjör",
        searchPhrase: "ingenjör a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "it-konsult",
        name: "IT-konsult",
        searchPhrase: "it konsult a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "it-support-offentlig-sektor",
        name: "IT-support offentlig sektor",
        searchPhrase: "it-support offentlig sektor a-kassa",
        recommendedAkassaId: "sts",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "journalist",
        name: "Journalist",
        searchPhrase: "journalist a-kassa",
        recommendedAkassaId: "journalist",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "kartongtillverkare",
        name: "Kartongtillverkare",
        searchPhrase: "kartongtillverkare a-kassa",
        recommendedAkassaId: "pappers",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "kassapersonal",
        name: "Kassapersonal",
        searchPhrase: "kassapersonal a-kassa",
        recommendedAkassaId: "handels",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "kemiindustriarbetare",
        name: "Kemiindustriarbetare",
        searchPhrase: "kemiindustriarbetare a-kassa",
        recommendedAkassaId: "ifmetall",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "kock",
        name: "Kock",
        searchPhrase: "kock a-kassa",
        recommendedAkassaId: "hrak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "konditor",
        name: "Konditor",
        searchPhrase: "konditor a-kassa",
        recommendedAkassaId: "livs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "konsult",
        name: "Konsult",
        searchPhrase: "konsult a-kassa",
        recommendedAkassaId: "smaa",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "kraftverksoperator",
        name: "Kraftverksoperatör",
        searchPhrase: "kraftverksoperatör a-kassa",
        recommendedAkassaId: "eak",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "kriminalvardare",
        name: "Kriminalvårdare",
        searchPhrase: "kriminalvårdare a-kassa",
        recommendedAkassaId: "seko",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "kulturarbetare",
        name: "Kulturarbetare",
        searchPhrase: "kulturarbetare a-kassa",
        recommendedAkassaId: "handels",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "kundansvarig",
        name: "Kundansvarig",
        searchPhrase: "kundansvarig a-kassa",
        recommendedAkassaId: "saljarnas",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "kundradgivare",
        name: "Kundrådgivare",
        searchPhrase: "kundrådgivare a-kassa",
        recommendedAkassaId: "ffak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "kurator",
        name: "Kurator",
        searchPhrase: "kurator a-kassa",
        recommendedAkassaId: "vision",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "kokspersonal",
        name: "Kökspersonal",
        searchPhrase: "kökspersonal a-kassa",
        recommendedAkassaId: "kommunal",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "lagerarbetare",
        name: "Lagerarbetare",
        searchPhrase: "lagerarbetare a-kassa",
        recommendedAkassaId: "handels",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "lagerpersonal",
        name: "Lagerpersonal",
        searchPhrase: "lagerpersonal a-kassa",
        recommendedAkassaId: "saak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "lantbrukskonsulent",
        name: "Lantbrukskonsulent",
        searchPhrase: "lantbrukskonsulent a-kassa",
        recommendedAkassaId: "slak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "larmtekniker",
        name: "Larmtekniker",
        searchPhrase: "larmtekniker a-kassa",
        recommendedAkassaId: "eak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "lastare",
        name: "Lastare",
        searchPhrase: "lastare a-kassa",
        recommendedAkassaId: "hamn",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "lastbilschauffor",
        name: "Lastbilschaufför",
        searchPhrase: "lastbilschaufför a-kassa",
        recommendedAkassaId: "transport",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "livsmedelsindustriarbetare",
        name: "Livsmedelsindustriarbetare",
        searchPhrase: "livsmedelsindustriarbetare a-kassa",
        recommendedAkassaId: "livs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "logistikforetagare",
        name: "Logistikföretagare",
        searchPhrase: "logistikföretagare a-kassa",
        recommendedAkassaId: "sha",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "logistikoperator",
        name: "Logistikoperatör",
        searchPhrase: "logistikoperatör a-kassa",
        recommendedAkassaId: "hamn",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "lokforare",
        name: "Lokförare",
        searchPhrase: "lokförare a-kassa",
        recommendedAkassaId: "seko",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "lokalvardare",
        name: "Lokalvårdare",
        searchPhrase: "lokalvårdare a-kassa",
        recommendedAkassaId: "fastighets",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "lakemedelsoperator",
        name: "Läkemedelsoperatör",
        searchPhrase: "läkemedelsoperatör a-kassa",
        recommendedAkassaId: "ifmetall",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "larare",
        name: "Lärare",
        searchPhrase: "lärare a-kassa",
        recommendedAkassaId: "la",
        image: "/assets/images/professions/larare.png",
    },


    {
        slug: "marknadsforare",
        name: "Marknadsförare",
        searchPhrase: "marknadsförare a-kassa",
        recommendedAkassaId: "saljarnas",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "massaarbetare",
        name: "Massaarbetare",
        searchPhrase: "massaarbetare a-kassa",
        recommendedAkassaId: "pappers",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "matros",
        name: "Matros",
        searchPhrase: "matros a-kassa",
        recommendedAkassaId: "seko",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "mejeriarbetare",
        name: "Mejeriarbetare",
        searchPhrase: "mejeriarbetare a-kassa",
        recommendedAkassaId: "livs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "montor",
        name: "Montör",
        searchPhrase: "montör a-kassa",
        recommendedAkassaId: "ifmetall",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "murare",
        name: "Murare",
        searchPhrase: "murare a-kassa",
        recommendedAkassaId: "byggnads",
        image: "/assets/images/categories/construction.png",
    },


    {
        slug: "malare",
        name: "Målare",
        searchPhrase: "målare a-kassa",
        recommendedAkassaId: "byggnads",
        image: "/assets/images/categories/construction.png",
    },


    {
        slug: "pappersmaskinsoperator",
        name: "Pappersmaskinsoperatör",
        searchPhrase: "pappersmaskinsoperatör a-kassa",
        recommendedAkassaId: "pappers",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "pappersskarare",
        name: "Pappersskärare",
        searchPhrase: "pappersskärare a-kassa",
        recommendedAkassaId: "pappers",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "personalhandlaggare",
        name: "Personalhandläggare",
        searchPhrase: "personalhandläggare a-kassa",
        recommendedAkassaId: "sts",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "produktionsledare-skog",
        name: "Produktionsledare skog",
        searchPhrase: "produktionsledare skog a-kassa",
        recommendedAkassaId: "slak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "projektledare",
        name: "Projektledare",
        searchPhrase: "projektledare a-kassa",
        recommendedAkassaId: "ledarna",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "redaktor",
        name: "Redaktör",
        searchPhrase: "redaktör a-kassa",
        recommendedAkassaId: "journalist",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "rektor",
        name: "Rektor",
        searchPhrase: "rektor a-kassa",
        recommendedAkassaId: "la",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "restaurangagare",
        name: "Restaurangägare",
        searchPhrase: "restaurangägare a-kassa",
        recommendedAkassaId: "smaa",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "sanerare",
        name: "Sanerare",
        searchPhrase: "sanerare a-kassa",
        recommendedAkassaId: "fastighets",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "servicearbetare",
        name: "Servicearbetare",
        searchPhrase: "servicearbetare a-kassa",
        recommendedAkassaId: "saak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "serviceforetagare",
        name: "Serviceföretagare",
        searchPhrase: "serviceföretagare a-kassa",
        recommendedAkassaId: "sha",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "serveringspersonal",
        name: "Serveringspersonal",
        searchPhrase: "serveringspersonal a-kassa",
        recommendedAkassaId: "hrak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "sjukskoterska",
        name: "Sjuksköterska",
        searchPhrase: "sjuksköterska a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/professions/sjukskoterska.png",
    },


    {
        slug: "skogskonsulent",
        name: "Skogskonsulent",
        searchPhrase: "skogskonsulent a-kassa",
        recommendedAkassaId: "slak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "skogsmaskinforare",
        name: "Skogsmaskinförare",
        searchPhrase: "skogsmaskinförare a-kassa",
        recommendedAkassaId: "gs",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "slaktare",
        name: "Slaktare",
        searchPhrase: "slaktare a-kassa",
        recommendedAkassaId: "livs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "snickare",
        name: "Snickare",
        searchPhrase: "snickare a-kassa",
        recommendedAkassaId: "byggnads",
        image: "/assets/images/professions/snickare.png",
    },


    {
        slug: "socialsekreterare",
        name: "Socialsekreterare",
        searchPhrase: "socialsekreterare a-kassa",
        recommendedAkassaId: "vision",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "studie-och-yrkesvagledare",
        name: "Studie- och yrkesvägledare",
        searchPhrase: "studie- och yrkesvägledare a-kassa",
        recommendedAkassaId: "la",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "svetsare",
        name: "Svetsare",
        searchPhrase: "svetsare a-kassa",
        recommendedAkassaId: "ifmetall",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "sagverksarbetare",
        name: "Sågverksarbetare",
        searchPhrase: "sågverksarbetare a-kassa",
        recommendedAkassaId: "gs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "saljare",
        name: "Säljare",
        searchPhrase: "säljare a-kassa",
        recommendedAkassaId: "saljarnas",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "saljare-tjansteman",
        name: "Säljare tjänstemän",
        searchPhrase: "säljare tjänstemän a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "taxichauffor",
        name: "Taxichaufför",
        searchPhrase: "taxichaufför a-kassa",
        recommendedAkassaId: "transport",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "taxiforetagare",
        name: "Taxiföretagare",
        searchPhrase: "taxiföretagare a-kassa",
        recommendedAkassaId: "smaa",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "teamledare",
        name: "Teamledare",
        searchPhrase: "teamledare a-kassa",
        recommendedAkassaId: "ledarna",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "terminalarbetare",
        name: "Terminalarbetare",
        searchPhrase: "terminalarbetare a-kassa",
        recommendedAkassaId: "hamn",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "tjansteman",
        name: "Tjänsteman",
        searchPhrase: "tjänsteman a-kassa",
        recommendedAkassaId: "saak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "tryckare",
        name: "Tryckare",
        searchPhrase: "tryckare a-kassa",
        recommendedAkassaId: "gs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "tryckpappersarbetare",
        name: "Tryckpappersarbetare",
        searchPhrase: "tryckpappersarbetare a-kassa",
        recommendedAkassaId: "pappers",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "trahusmontor",
        name: "Trähusmontör",
        searchPhrase: "trähusmontör a-kassa",
        recommendedAkassaId: "gs",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "underskoterska",
        name: "Undersköterska",
        searchPhrase: "undersköterska a-kassa",
        recommendedAkassaId: "kommunal",
        image: "/assets/images/professions/underskoterska.png",
    },


    {
        slug: "vd",
        name: "VD",
        searchPhrase: "vd a-kassa",
        recommendedAkassaId: "ledarna",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "verktygsmakare",
        name: "Verktygsmakare",
        searchPhrase: "verktygsmakare a-kassa",
        recommendedAkassaId: "ifmetall",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "virkeskopare",
        name: "Virkesköpare",
        searchPhrase: "virkesköpare a-kassa",
        recommendedAkassaId: "slak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "vvs-arbetare",
        name: "VVS-arbetare",
        searchPhrase: "vvs-arbetare a-kassa",
        recommendedAkassaId: "fastighets",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "vvs-montor",
        name: "VVS-montör",
        searchPhrase: "vvs-montör a-kassa",
        recommendedAkassaId: "seko",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "aldreomsorgspersonal",
        name: "Äldreomsorgspersonal",
        searchPhrase: "äldreomsorgspersonal a-kassa",
        recommendedAkassaId: "kommunal",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "oversattare",
        name: "Översättare",
        searchPhrase: "översättare a-kassa",
        recommendedAkassaId: "journalist",
        image: "/assets/images/categories/office.png",
    },



    {
        slug: "systemutvecklare",
        name: "Systemutvecklare",
        searchPhrase: "systemutvecklare a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "webbutvecklare",
        name: "Webbutvecklare",
        searchPhrase: "webbutvecklare a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "hr-specialist",
        name: "HR-specialist",
        searchPhrase: "hr-specialist a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "hr-chef",
        name: "HR-chef",
        searchPhrase: "hr-chef a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "personalvetare",
        name: "Personalvetare",
        searchPhrase: "personalvetare a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "receptionist-kontor",
        name: "Receptionist (kontor)",
        searchPhrase: "receptionist (kontor) a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "kontorist",
        name: "Kontorist",
        searchPhrase: "kontorist a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "brevsorterare",
        name: "Brevsorterare",
        searchPhrase: "brevsorterare a-kassa",
        recommendedAkassaId: "seko",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "tandhygienist",
        name: "Tandhygienist",
        searchPhrase: "tandhygienist a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "tandskoterska",
        name: "Tandsköterska",
        searchPhrase: "tandsköterska a-kassa",
        recommendedAkassaId: "vision",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "tandlakare",
        name: "Tandläkare",
        searchPhrase: "tandläkare a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "vardcentraladministrator",
        name: "Vårdcentraladministratör",
        searchPhrase: "vårdcentraladministratör a-kassa",
        recommendedAkassaId: "vision",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "apotekstekniker",
        name: "Apotekstekniker",
        searchPhrase: "apotekstekniker a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "apotekare",
        name: "Apotekare",
        searchPhrase: "apotekare a-kassa",
        recommendedAkassaId: "aea",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "butiksledare",
        name: "Butiksledare",
        searchPhrase: "butiksledare a-kassa",
        recommendedAkassaId: "handels",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "e-handelslogistiker",
        name: "E-handelslogistiker",
        searchPhrase: "e-handelslogistiker a-kassa",
        recommendedAkassaId: "handels",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "chauffor-latt-lastbil",
        name: "Chaufför lätt lastbil",
        searchPhrase: "chaufför lätt lastbil a-kassa",
        recommendedAkassaId: "transport",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "behorig-elektriker-service",
        name: "Behörig elektriker-service",
        searchPhrase: "behörig elektriker-service a-kassa",
        recommendedAkassaId: "eak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "vaktare",
        name: "Väktare",
        searchPhrase: "väktare a-kassa",
        recommendedAkassaId: "transport",
        image: "/assets/images/categories/transport.png",
    },


    {
        slug: "kundtjanstmedarbetare",
        name: "Kundtjänstmedarbetare",
        searchPhrase: "kundtjänstmedarbetare a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "telefonsaljare",
        name: "Telefonsäljare",
        searchPhrase: "telefonsäljare a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "hr-administrator",
        name: "HR-administratör",
        searchPhrase: "hr-administratör a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "arbetsledare-industri",
        name: "Arbetsledare industri",
        searchPhrase: "arbetsledare industri a-kassa",
        recommendedAkassaId: "ifmetall",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "maskinforare-bygg-anlaggning",
        name: "Maskinförare (bygg/anläggning)",
        searchPhrase: "maskinförare (bygg/anläggning) a-kassa",
        recommendedAkassaId: "byggnads",
        image: "/assets/images/categories/construction.png",
    },


    {
        slug: "tradgardsarbetare",
        name: "Trädgårdsarbetare",
        searchPhrase: "trädgårdsarbetare a-kassa",
        recommendedAkassaId: "kommunal",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "kallskanka",
        name: "Kallskänka",
        searchPhrase: "kallskänka a-kassa",
        recommendedAkassaId: "hrak",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "servicetekniker-maskiner",
        name: "Servicetekniker maskiner",
        searchPhrase: "servicetekniker maskiner a-kassa",
        recommendedAkassaId: "unionen",
        image: "/assets/images/categories/office.png",
    },


    {
        slug: "produktionstekniker",
        name: "Produktionstekniker",
        searchPhrase: "produktionstekniker a-kassa",
        recommendedAkassaId: "ifmetall",
        image: "/assets/images/categories/industry.png",
    },


    {
        slug: "brandman",
        name: "Brandman",
        searchPhrase: "brandman a-kassa",
        recommendedAkassaId: "kommunal",
        image: "/assets/images/categories/healthcare.png",
    },


    {
        slug: "larmoperator-112",
        name: "Larmoperatör (112)",
        searchPhrase: "larmoperatör (112) a-kassa",
        recommendedAkassaId: "sts",
        image: "/assets/images/categories/industry.png",
    },];
