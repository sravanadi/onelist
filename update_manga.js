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

// Remove old manga sites (if any)
sites = sites.filter(s => s.categoryId !== 'manga');

const newMangaDomains = [
    "comix.to",
    "mangafire.to",
    "mangahaven.net",
    "mangataro.org",
    "mangadex.org",
    "allmanga.to",
    "mangago.me",
    "weebcentral.com",
    "manganato.gg",
    "kagane.org"
];

let baseId = 3000;
for (const domain of newMangaDomains) {
    let name = domain.split('.')[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Special formatting
    if (name.toLowerCase() === 'mangadex') name = 'MangaDex';
    if (name.toLowerCase() === 'manganato') name = 'MangaNato';
    if (name.toLowerCase() === 'mangafire') name = 'MangaFire';
    if (name.toLowerCase() === 'weebcentral') name = 'WeebCentral';

    let url = "https://" + (domain === 'manganato.gg' ? 'manganato.com' : domain); // usually manganato is com, but domain provided is gg - let's stick to user's domain just in case
    url = "https://" + domain;

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: `Read free manga, manhwa, and comics online at ${domain} in high quality.`,
        categoryId: 'manga',
        tags: ["Free", "Manga", "Manhwa", "Comics"],
        badges: ["Free"],
        rating: Number((4 + Math.random() * 0.9).toFixed(1)), // Random rating between 4.0 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "English"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);

const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated manga sites in sites.ts!");
