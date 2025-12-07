export interface FamousPerson {
    name: string;
    description: string;
}

export const famousPeople: Record<string, FamousPerson[]> = {
    "administrator": [
        { name: "Angela Merkel", description: "arbetade som administrativ forskningsledare." },
        { name: "Indra Nooyi", description: "började karriären i administrativa roller innan hon blev CEO." }
    ],
    "banktjansteman": [
        { name: "Ray Kroc", description: "arbetade med finansiella och bankrelaterade uppgifter." },
        { name: "Warren Buffett", description: "arbetade inom finans/bank i unga år." }
    ],
    "barnskotare": [
        { name: "Julia Roberts", description: "arbetade som barnflicka." },
        { name: "Halle Berry", description: "arbetade som nanny." }
    ],
    "bussforare": [
        { name: "Alec Guinness", description: "körde buss i London." },
        { name: "James Cameron", description: "körde buss innan filmkarriären." }
    ],
    "butikssaljare": [
        { name: "Megan Fox", description: "arbetade i butik." },
        { name: "Barack Obama", description: "arbetade i Baskin Robbins." }
    ],
    "byggnadsarbetare": [
        { name: "Ozzy Osbourne", description: "arbetade inom bygg." },
        { name: "Arnold Schwarzenegger", description: "arbetade som murare." }
    ],
    "ekonom": [
        { name: "Sheryl Sandberg", description: "ekonom och tidigare CFO." },
        { name: "Elena Lagadinova", description: "välkänd ekonom." }
    ],
    "elektriker": [
        { name: "George Harrison", description: "elektrikerlärling." },
        { name: "Vernon Presley", description: "elektriker." }
    ],
    "forskollarare": [
        { name: "Tina Fey", description: "arbetade med barngrupper." },
        { name: "Hugh Jackman", description: "var lärare för barn." }
    ],
    "frisor": [
        { name: "Sharon Osbourne", description: "arbetade i frisörverksamhet." },
        { name: "Madonna", description: "frisörassistent." }
    ],
    "ingenjor": [
        { name: "Rowan Atkinson", description: "elingenjör." },
        { name: "Herbert Hoover", description: "gruvingenjör." }
    ],
    "it-konsult": [
        { name: "Larry Ellison", description: "teknisk IT-konsult." },
        { name: "Satya Nadella", description: "teknisk rådgivare." }
    ],
    "journalist": [
        { name: "Oprah Winfrey", description: "TV-journalist." },
        { name: "Anderson Cooper", description: "CNN-journalist." }
    ],
    "kock": [
        { name: "Jamie Oliver", description: "professionell kock." },
        { name: "Gordon Ramsay", description: "världsberömd kock." }
    ],
    "lagerarbetare": [
        { name: "Matthew McConaughey", description: "lagerarbetare." },
        { name: "Tom Hardy", description: "distributionslager." }
    ],
    "larare": [
        { name: "Sylvester Stallone", description: "idrottslärare." },
        { name: "J.K. Rowling", description: "engelsklärare." }
    ],
    "lastbilschauffor": [
        { name: "Richard Pryor", description: "körde lastbil." },
        { name: "Sean Connery", description: "lastbilschaufför." }
    ],
    "lokalvardare": [
        { name: "Jennifer Aniston", description: "städare." },
        { name: "Jim Carrey", description: "lokalvårdare." }
    ],
    "lokforare": [
        { name: "Patricia Quinn", description: "arbetade inom järnvägen." },
        { name: "Pete Waterman", description: "lokförare." }
    ],
    "montor": [
        { name: "Eminem", description: "fabriksmonterare." },
        { name: "Michael Caine", description: "montör och packare." }
    ],
    "projektledare": [
        { name: "Marissa Mayer", description: "ledde Google-projekt." },
        { name: "Elon Musk", description: "projektledde tekniska projekt." }
    ],
    "saljare": [
        { name: "Dwayne Johnson", description: "telefonsäljare." },
        { name: "Steve Jobs", description: "tekniksäljare." }
    ],
    "serveringspersonal": [
        { name: "Jennifer Lopez", description: "servitris." },
        { name: "Lady Gaga", description: "servitris i New York." }
    ],
    "sjukskoterska": [
        { name: "Mary Seacole", description: "historisk sjuksköterska." },
        { name: "Florence Nightingale", description: "modern sjuksköterskas grundare." }
    ],
    "snickare": [
        { name: "Nick Offerman", description: "professionell snickare." },
        { name: "Harrison Ford", description: "snickare i Hollywood." }
    ],
    "socialsekreterare": [
        { name: "Alice Walker", description: "arbetade inom socialtjänst." },
        { name: "Jill Biden", description: "arbetade inom sociala program." }
    ],
    "svetsare": [
        { name: "Eric Church", description: "svetsare." },
        { name: "Weldon Myrick", description: "svetsare." }
    ],
    "taxichauffor": [
        { name: "Robert De Niro", description: "körde taxi periodvis." },
        { name: "Danny DeVito", description: "taxichaufför." }
    ],
    "underskoterska": [
        { name: "Naomi Judd", description: "vårdbiträde." },
        { name: "Whoopi Goldberg", description: "undersköterska." }
    ],
    "verktygsmakare": [
        { name: "Billy Connolly", description: "verktygsarbetare." },
        { name: "Paul Teutul Sr.", description: "verktygsmakare." }
    ]
};
