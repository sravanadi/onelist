const fs = require('fs');

const fileContent = fs.readFileSync('src/data/sites.ts', 'utf8');

const startMarker = 'export const featuredSites: Site[] = ';
const startIndex = fileContent.indexOf(startMarker);
const endMarker = 'export const getSitesByCategory';
let endIndex = fileContent.lastIndexOf('// Helper to get sites by category');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find markers!");
    process.exit(1);
}

const arrayStr = fileContent.substring(startIndex + startMarker.length, endIndex).trim().replace(/;$/, '');

let sites = [];
try {
    sites = eval('(' + arrayStr + ')');
} catch (e) {
    console.error("Error parsing featuredSites array:", e);
    process.exit(1);
}

// Remove old porn sites
sites = sites.filter(s => s.categoryId !== 'porn');

const pornEntries = [
    // AI Undress
    { domain: "eternalai.org", type: "AI" },

    // Onlyfans
    { domain: "fapello.com", type: "Onlyfans" },
    { domain: "coomer.st", type: "Onlyfans" },
    { domain: "erothots.is", type: "Onlyfans" },
    { domain: "bunkr-albums.io", type: "Onlyfans" },

    // Free Porn
    { domain: "egooners.com", type: "Free" },
    { domain: "beeg.com", type: "Free" },
    { domain: "youporn.com", type: "Free" },
    { domain: "porntrex.com", type: "Free" },
    { domain: "xvideos.com", type: "Free" },
    { domain: "spankbang.com", type: "Free" },
    { domain: "xhamster.com", type: "Free" },
    { domain: "porndoe.com", type: "Free" },
    { domain: "xnxx.com", type: "Free" },
    { domain: "redtube.com", type: "Free" },
    { domain: "czechvideo.ac", type: "Free" },
    { domain: "pornhub.com", type: "Free" },
    { domain: "eporner.com", type: "Free" }
];

let baseId = 13000;
for (const entry of pornEntries) {
    const domain = entry.domain;
    let name = domain.split('.')[0];
    let url = "https://" + domain;

    if (name.toLowerCase() === 'eternalai') name = 'EternalAI';
    else if (name.toLowerCase() === 'pornhub') name = 'Pornhub';
    else if (name.toLowerCase() === 'youporn') name = 'YouPorn';
    else if (name.toLowerCase() === 'xvideos') name = 'XVideos';
    else if (name.toLowerCase() === 'xhamster') name = 'xHamster';
    else if (name.toLowerCase() === 'redtube') name = 'RedTube';
    else if (name.toLowerCase() === 'spankbang') name = 'SpankBang';
    else if (name.toLowerCase() === 'czechvideo') name = 'CzechVideo';
    else if (name.toLowerCase() === 'eporner') name = 'ePorner';
    else if (name.toLowerCase() === 'bunkr-albums') name = 'Bunkr Albums';
    else name = name.charAt(0).toUpperCase() + name.slice(1);

    let desc = `Watch premium 18+ adult entertainment at ${name} for free in stunning HD.`;
    let tags = ["18+", "Adult", "Free"];

    if (entry.type === "AI") {
        desc = `Advanced AI Undress generator and artificial intelligence tools at ${name}.`;
        tags = ["AI Undress", "AI", "18+", "Free"];
    } else if (entry.type === "Onlyfans") {
        desc = `Discover free OnlyFans leaks and exclusive content absolutely free on ${name}.`;
        tags = ["Onlyfans", "Leaks", "18+", "Free"];
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'porn',
        tags: tags,
        badges: ["18+", "Free"],
        rating: Number((4.1 + Math.random() * 0.8).toFixed(1)), // Random rating
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, International"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2).replace(/"(Free|Paid|Freemium|18\+|New|Popular|Editor Pick)"/g, '"$1"');
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Porn sites in sites.ts!");
