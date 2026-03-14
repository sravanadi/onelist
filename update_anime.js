const fs = require('fs');

const fileContent = fs.readFileSync('src/data/sites.ts', 'utf8');

const startMarker = 'export const featuredSites: Site[] = ';
const startIndex = fileContent.indexOf(startMarker);
const endMarker = 'export const getSitesByCategory';
const endIndex = fileContent.lastIndexOf('// Helper to get sites by category');

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

// Remove old anime sites
sites = sites.filter(s => s.categoryId !== 'anime');

const newAnimeDomains = [
    "anime.nexus",
    "hianime.to",
    "9animetv.to",
    "miruro.to",
    "anitaku.io",
    "anikai.to",
    "gogoanime.org.vc",
    "anigo.to",
    "kickass-anime.ro",
    "aniwatchtv.to",
    "animegg.org",
    "animestream.net",
    "kissanime.com.ru",
    "allmanga.to",
    "aniworld.to",
    "wcostream.tv",
    "justanime.to",
    "123animes.ru"
];

let baseId = 2000;
for (const domain of newAnimeDomains) {
    let name = domain.split('.')[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);
    // Special formatting for known sites
    if (name.toLowerCase() === '9animetv') name = '9Anime TV';
    if (name.toLowerCase() === 'gogoanime') name = 'GogoAnime';
    if (name.toLowerCase() === 'kissanime') name = 'KissAnime';

    let url = "https://" + domain;

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: `Watch free high-quality anime online at ${domain}. Stream the latest episodes in sub and dub.`,
        categoryId: 'anime',
        tags: ["Free", "HD", "Subbed", "Dubbed"],
        badges: ["Free"],
        rating: Number((4 + Math.random() * 0.9).toFixed(1)), // Random rating between 4.0 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, Japanese"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);

const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated anime sites in sites.ts!");
