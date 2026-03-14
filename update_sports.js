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

// Remove old sports sites
sites = sites.filter(s => s.categoryId !== 'live-sports');

const newSportsDomains = [
    "livetv.sx",
    "totalsportek.events",
    "streamed.pk",
    "ntv.cx",
    "streameast.ga",
    "fctv33.hair",
    "methstreams.ms",
    "sportsbite.sbs",
    "sport71.pro",
    "sportyhunter.com",
    "watchsports.to",
    "onhockey.tv",
    "crackstreams.io",
    "sportplus.live",
    "livetv861.me",
    "strikeout.im",
    "watchfooty.st",
    "sportsurge.net"
];

let baseId = 4000;
for (const domain of newSportsDomains) {
    let name = domain.split('.')[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Special formatting
    if (name.toLowerCase() === 'livetv') name = 'LiveTV';
    if (name.toLowerCase() === 'totalsportek') name = 'TotalSportek';
    if (name.toLowerCase() === 'streameast') name = 'StreamEast';
    if (name.toLowerCase() === 'methstreams') name = 'MethStreams';
    if (name.toLowerCase() === 'crackstreams') name = 'CrackStreams';
    if (name.toLowerCase() === 'sportsurge') name = 'SportSurge';

    let url = "https://" + domain;

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: `Watch free live sports streams online at ${domain} including NFL, NBA, Football, and UFC in HD.`,
        categoryId: 'live-sports',
        tags: ["Free", "Live Sports", "HD", "Streaming"],
        badges: ["Free"],
        rating: Number((4 + Math.random() * 0.9).toFixed(1)), // Random rating between 4.0 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "English" // Default to english, can be updated later
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);

const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated live sports sites in sites.ts!");
