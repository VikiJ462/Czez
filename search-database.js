// Databáze známých stránek pro vyhledávač
const searchDatabase = [
    // Sociální sítě
    {
        title: "Facebook - sociální síť",
        url: "https://www.facebook.com",
        description: "Největší sociální síť na světě. Spojte se s přáteli, sdílejte fotky, sledujte novinky a komunikujte s lidmi z celého světa.",
        keywords: ["facebook", "sociální", "síť", "přátelé", "komunikace", "meta"]
    },
    {
        title: "Instagram - fotky a videa",
        url: "https://www.instagram.com",
        description: "Sdílejte fotky a videa s přáteli. Stories, Reels, IGTV a další funkce pro kreativní sdílení obsahu.",
        keywords: ["instagram", "fotky", "videa", "stories", "reels", "sociální"]
    },
    {
        title: "Twitter (X) - mikroblog",
        url: "https://twitter.com",
        description: "Mikroblogovací platforma pro sdílení krátkých zpráv, novinek a následování aktuálních trendů.",
        keywords: ["twitter", "x", "tweety", "zprávy", "trendy", "elon musk"]
    },
    {
        title: "LinkedIn - profesní síť",
        url: "https://www.linkedin.com",
        description: "Profesní sociální síť pro navazování obchodních kontaktů, hledání práce a career development.",
        keywords: ["linkedin", "práce", "kariéra", "profesní", "kontakty", "business"]
    },
    {
        title: "TikTok - krátká videa",
        url: "https://www.tiktok.com",
        description: "Platforma pro sdílení krátkých zábavných videí s hudbou, tanci a kreativním obsahem.",
        keywords: ["tiktok", "videa", "tanec", "hudba", "zábava", "viral"]
    },
    {
        title: "YouTube - video platforma",
        url: "https://www.youtube.com",
        description: "Největší video platforma světa. Sledujte, nahrávajte a sdílejte videa na jakékoli téma.",
        keywords: ["youtube", "videa", "google", "sledování", "nahrávání", "kanály"]
    },

    // Vyhledávače
    {
        title: "Google - vyhledávač",
        url: "https://www.google.com",
        description: "Nejpoužívanější vyhledávač na světě. Najděte cokoli na internetu rychle a přesně.",
        keywords: ["google", "vyhledávač", "search", "najít", "internet"]
    },
    {
        title: "Bing - Microsoft vyhledávač",
        url: "https://www.bing.com",
        description: "Vyhledávač od Microsoftu s AI funkcemi a integrací s Office produkty.",
        keywords: ["bing", "microsoft", "vyhledávač", "ai", "search"]
    },
    {
        title: "Seznam.cz - český portál",
        url: "https://www.seznam.cz",
        description: "Největší český internetový portál s vyhledáváním, e-mailem, zprávami a dalšími službami.",
        keywords: ["seznam", "český", "portál", "email", "zprávy", "mapy"]
    },
    {
        title: "DuckDuckGo - soukromý vyhledávač",
        url: "https://duckduckgo.com",
        description: "Vyhledávač, který nesleduje uživatele a chrání jejich soukromí při vyhledávání.",
        keywords: ["duckduckgo", "soukromí", "anonymní", "vyhledávač", "bezpečnost"]
    },

    // E-commerce
    {
        title: "Amazon - online obchod",
        url: "https://www.amazon.com",
        description: "Největší online obchod světa. Nakupujte elektroniku, knihy, oblečení a vše co potřebujete.",
        keywords: ["amazon", "obchod", "nákupy", "elektronika", "knihy", "doprava"]
    },
    {
        title: "eBay - aukce a prodej",
        url: "https://www.ebay.com",
        description: "Online tržiště pro nákup a prodej nových i použitých věcí prostřednictvím aukcí nebo přímého prodeje.",
        keywords: ["ebay", "aukce", "prodej", "bazaar", "použité", "sběratelské"]
    },
    {
        title: "Alza.cz - česká elektronika",
        url: "https://www.alza.cz",
        description: "Největší český e-shop s elektronikou, počítači, mobily a dalším zbožím s rychlou dodávkou.",
        keywords: ["alza", "elektronika", "počítače", "mobily", "český", "e-shop"]
    },
    {
        title: "Mall.cz - český obchod",
        url: "https://www.mall.cz",
        description: "Velký český online obchod s širokou nabídkou zboží od elektroniky po domácnost.",
        keywords: ["mall", "český", "obchod", "elektronika", "domácnost", "móda"]
    },

    // Zpravodajství
    {
        title: "BBC News - britské zprávy",
        url: "https://www.bbc.com/news",
        description: "Mezinárodní zpravodajství BBC s aktuálními zprávami ze světa, politiky, sportu a kultury.",
        keywords: ["bbc", "zprávy", "news", "svět", "politika", "mezinárodní"]
    },
    {
        title: "CNN - americké zprávy",
        url: "https://www.cnn.com",
        description: "Americká zpravodajská stanice s nejnovějšími zprávami z USA a celého světa.",
        keywords: ["cnn", "zprávy", "amerika", "usa", "breaking news", "politika"]
    },
    {
        title: "iDNES.cz - české zprávy",
        url: "https://www.idnes.cz",
        description: "Přední český zpravodajský server s aktuálními zprávami z domova i ze světa.",
        keywords: ["idnes", "české", "zprávy", "domácí", "politika", "sport"]
    },
    {
        title: "Novinky.cz - český portál",
        url: "https://www.novinky.cz",
        description: "Český zpravodajský portál s čerstvými informacemi ze všech oblastí života.",
        keywords: ["novinky", "české", "zprávy", "aktuality", "informace"]
    },
    {
        title: "Mahalo.cz",
        url: "https://www.mahalo.cz",
        description: "Česká stránka o různých místech.",
        keywords: ["české", "mahalo", "cestování", "místa", "starověký"]
    },

    // Technologie a IT
    {
        title: "GitHub - kód a spolupráce",
        url: "https://github.com",
        description: "Platforma pro ukládání kódu, verzování pomocí Git a spolupráci na software projektech.",
        keywords: ["github", "git", "kód", "programování", "open source", "microsoft"]
    },
    {
        title: "Stack Overflow - programátorské Q&A",
        url: "https://stackoverflow.com",
        description: "Největší komunita programátorů pro otázky a odpovědi ohledně programování a IT.",
        keywords: ["stackoverflow", "programování", "otázky", "odpovědi", "kód", "developers"]
    },
    {
        title: "Reddit - diskuzní fóra",
        url: "https://www.reddit.com",
        description: "Platforma s tisíci diskuzních fór (subreddity) na jakékoli téma co vás napadne.",
        keywords: ["reddit", "diskuze", "fóra", "subreddit", "komunita", "témata"]
    },
    {
        title: "Wikipedia - encyklopedie",
        url: "https://www.wikipedia.org",
        description: "Největší online encyklopedie vytvářená dobrovolníky s články ve všech jazycích světa.",
        keywords: ["wikipedia", "encyklopedie", "znalosti", "články", "vzdělání", "informace"]
    },

    // Zábava a média
    {
        title: "Netflix - streaming videí",
        url: "https://www.netflix.com",
        description: "Prémiová streamovací služba s filmy, seriály a dokumenty dostupnými kdykoliv online.",
        keywords: ["netflix", "filmy", "seriály", "streaming", "zábava", "dokumenty"]
    },
    {
        title: "Spotify - hudební streaming",
        url: "https://www.spotify.com",
        description: "Hudební streamovací služba s miliony skladeb, playlisty a podcasty pro všechny chutě.",
        keywords: ["spotify", "hudba", "streaming", "skladby", "playlisty", "podcasty"]
    },
    {
        title: "Twitch - live streaming",
        url: "https://www.twitch.tv",
        description: "Platforma pro sledování live streamů, především her, ale i jiného obsahu v reálném čase.",
        keywords: ["twitch", "streaming", "hry", "live", "gamers", "zábava"]
    },
    {
        title: "Discord - chat pro komunity",
        url: "https://discord.com",
        description: "Komunikační platforma původně pro hráče, nyní používaná komunitami všeho druhu.",
        keywords: ["discord", "chat", "komunity", "hry", "voice", "servery"]
    },
    {
        title: "Internet Archive",
        url: "https://archive.org",
        description: "Stránka pro stáhování různých věcí.",
        keywords: ["internet archive", "archive", "stahování", "aplikace", "programy", "iso", "operační systém"]
    },
    {
        title: "Slunečnice.cz",
        url: "https://www.slunecnice.cz",
        description: "Stránka pro stáhování různých programů.",
        keywords: ["slunečnice", "slunecnice", "slunečnice.cz", "slunecnice.cz", "stahování", "aplikace", "programy"]
    },
    {
        title: "Steam - stahování her",
        url: "https://store.steampowered.com",
        description: "Stránka pro stáhování různých her.",
        keywords: ["steam", "hry", "stahování", "aplikace", "programy"]
    },
    {
        title: "Epic Games - stahování her",
        url: "https://store.epicgames.com",
        description: "Stránka pro stáhování různých her.",
        keywords: ["epic games", "hry", "stahování", "aplikace", "programy"]
    },
    {
        title: "Minecraft Launcher stáhnutí",
        url: "https://www.minecraft.net/en-us/download",
        description: "Stáhni si Minecraft Launcher a užij si hraní.",
        keywords: ["Minecraft", "Minecraft Launcher", "stáhnout Minecraft", "Minecraft stáhnutí"]
    },

    // Práce a produktivita
    {
        title: "Microsoft Office Online",
        url: "https://office.com",
        description: "Online verze Microsoft Office nástrojů - Word, Excel, PowerPoint a další pro práci v cloudu.",
        keywords: ["office", "microsoft", "word", "excel", "powerpoint", "online"]
    },
    {
        title: "Google Workspace",
        url: "https://workspace.google.com",
        description: "Sada Google nástrojů pro práci - Gmail, Drive, Docs, Sheets a další pro týmovou spolupráci.",
        keywords: ["google", "workspace", "gmail", "drive", "docs", "sheets"]
    },
    {
        title: "Slack - týmová komunikace",
        url: "https://slack.com",
        description: "Nástroj pro komunikaci v týmech s kanály, přímými zprávami a integrací s dalšími aplikacemi.",
        keywords: ["slack", "týmy", "komunikace", "kanály", "chat", "business"]
    },
    {
        title: "Zoom - videokonference",
        url: "https://zoom.us",
        description: "Platforma pro videokonference, online schůzky a vzdálené prezentace pro firmy i školy.",
        keywords: ["zoom", "videokonference", "schůzky", "online", "prezentace", "vzdálená práce"]
    },

    // Vzdělání
    {
        title: "Khan Academy - online vzdělávání",
        url: "https://www.khanacademy.org",
        description: "Bezplatná online vzdělávací platforma s kurzy matematiky, věd, programování a dalších předmětů.",
        keywords: ["khan academy", "vzdělávání", "kurzy", "matematika", "věda", "zdarma"]
    },
    {
        title: "Coursera - online kurzy",
        url: "https://www.coursera.org",
        description: "Platforma s online kurzy od univerzit a firem po celém světě, včetně certifikátů a diplomů.",
        keywords: ["coursera", "kurzy", "univerzity", "certifikáty", "vzdělávání", "online"]
    },
    {
        title: "Duolingo - jazyky zábavně",
        url: "https://www.duolingo.com",
        description: "Aplikace pro výuku cizích jazyků formou her a interaktivních lekcí zdarma.",
        keywords: ["duolingo", "jazyky", "výuka", "angličtina", "němčina", "zdarma"]
    },

    // České stránky
    {
        title: "Česká televize - iVysílání",
        url: "https://www.ceskatelevize.cz",
        description: "Oficiální stránky České televize s live vysíláním a archivem pořadů zdarma.",
        keywords: ["česká televize", "čt", "ivysílání", "pořady", "zprávy", "dokumenty"]
    },
    {
        title: "Prima Play - televize online",
        url: "https://www.iprima.cz",
        description: "Sledujte pořady TV Prima online, seriály, filmy a zprávy kdykoliv zdarma.",
        keywords: ["prima", "televize", "online", "seriály", "filmy", "zprávy"]
    },
    {
        title: "Lupa.cz - IT zpravodajství",
        url: "https://www.lupa.cz",
        description: "Přední český server o IT, internetu, technologiích a digitálním světě.",
        keywords: ["lupa", "it", "technologie", "internet", "digitální", "czech"]
    },
    {
        title: "Root.cz - server o IT",
        url: "https://www.root.cz",
        description: "Český server zaměřený na Linux, open source, programování a IT technologie.",
        keywords: ["root", "linux", "open source", "programování", "it", "czech"]
    },

    // Mapy a cestování
    {
        title: "Google Maps - mapy a navigace",
        url: "https://maps.google.com",
        description: "Nejpřesnější mapy světa s navigací, informacemi o místech a plánováním tras.",
        keywords: ["google maps", "mapy", "navigace", "trasy", "místnosti", "doprava"]
    },
    {
        title: "Booking.com - rezervace ubytování",
        url: "https://www.booking.com",
        description: "Největší platforma pro rezervaci hotelů, apartmánů a ubytování po celém světě.",
        keywords: ["booking", "hotely", "ubytování", "rezervace", "cestování", "dovolená"]
    },
    {
        title: "Airbnb - soukromá ubytování",
        url: "https://www.airbnb.com",
        description: "Platforma pro rezervaci soukromých ubytování, domů a zážitků od místních hostitelů.",
        keywords: ["airbnb", "ubytování", "domy", "apartmány", "cestování", "hostitelé"]
    },
    {
        title: "Mapy.com - České mapy a navigace",
        url: "https://www.mapy.com",
        description: "České mapy a navigace",
        keywords: ["mapy", "mapy.cz", "mapy.com", "navigace", "trasy", "cestování"]
    },

    // Počasí a praktické
    {
        title: "Weather.com - předpověď počasí",
        url: "https://weather.com",
        description: "Přesná předpověď počasí pro váš region i celý svět s radary a dlouhodobými prognózami.",
        keywords: ["počasí", "předpověď", "weather", "déšť", "teplota", "radar"]
    },
    {
        title: "In-počasí.cz - české počasí",
        url: "https://www.in-pocasi.cz",
        description: "Podrobná předpověď počasí pro Českou republiku s radary a meteorologickými mapami.",
        keywords: ["in-počasí", "české", "počasí", "předpověď", "radar", "česko"]
    },

    // Zdraví a lifestyle
    {
        title: "WebMD - zdravotní informace",
        url: "https://www.webmd.com",
        description: "Spolehlivé zdravotní informace, symptomy nemocí a zdravotní rady od lékařů.",
        keywords: ["webmd", "zdraví", "nemoci", "symptomy", "lékaři", "medicína"]
    },
    {
        title: "Pinterest - inspirace a nápady",
        url: "https://www.pinterest.com",
        description: "Sociální síť plná inspirace pro vaření, bydlení, módu, DIY projekty a životní styl.",
        keywords: ["pinterest", "inspirace", "nápady", "diy", "vaření", "bydlení"]
    }
];

// Exportujeme databázi pro použití v hlavním souboru
if (typeof module !== 'undefined' && module.exports) {
    module.exports = searchDatabase;
}