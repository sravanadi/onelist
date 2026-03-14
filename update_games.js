const fs = require('fs');

const fileContent = fs.readFileSync('src/data/sites.ts', 'utf8');

const startMarker = 'export const featuredSites: Site[] = ';
const startIndex = fileContent.indexOf(startMarker);
const endMarker = 'export const getSitesByCategory'; // Just in case, try this first
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

// Remove old games sites
sites = sites.filter(s => s.categoryId !== 'games');

const newGameDomains = [
    "fitgirl-repacks.site",
    "dodi-repacks.site",
    "ankergames.net",
    "g4u.to",
    "steamrip.com",
    "steamgg.net",
    "m4ckd0ge-repacks.site",
    "gload.to"
];

let baseId = 7000;
for (const domain of newGameDomains) {
    let name = domain.split('.')[0];

    // Clean up hyphens and special formatting
    if (name.toLowerCase() === 'fitgirl-repacks') name = 'FitGirl Repacks';
    else if (name.toLowerCase() === 'dodi-repacks') name = 'DODI Repacks';
    else if (name.toLowerCase() === 'ankergames') name = 'AnkerGames';
    else if (name.toLowerCase() === 'g4u') name = 'G4U';
    else if (name.toLowerCase() === 'steamrip') name = 'SteamRIP';
    else if (name.toLowerCase() === 'steamgg') name = 'SteamGG';
    else if (name.toLowerCase() === 'm4ckd0ge-repacks') name = 'M4ckD0ge Repacks';
    else if (name.toLowerCase() === 'gload') name = 'Gload';
    else name = name.charAt(0).toUpperCase() + name.slice(1);

    let url = "https://" + domain;
    let desc = `Download free PC games, repacks, and standalone versions directly from ${name}.`;

    let tags = ["Free", "PC Games", "Repacks", "Downloads"];
    let badges = ["Free"];

    // Specific formatting for popular repackers
    if (name === 'FitGirl Repacks' || name === 'DODI Repacks') {
        badges = ["Free", "Editor Pick"];
        desc = `The official site for ${name}, offering highly compressed free PC games.`;
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'games',
        tags: tags,
        badges: badges,
        rating: Number((4.1 + Math.random() * 0.8).toFixed(1)), // Random rating between 4.1 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "English"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);

const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Games sites in sites.ts!");
