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

// Remove old live TV sites
sites = sites.filter(s => s.categoryId !== 'live-tv');

const newLiveTVDomains = [
    "the-tv.app",
    "globetv.app",
    "daddylive.mp",
    "tv247us.live",
    "ntvstream.cx",
    "iptv-web.app",
    "publiciptv.com"
];

let baseId = 5000;
for (const domain of newLiveTVDomains) {
    let name = domain.split('.')[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Clean up hyphens and special formatting
    name = name.replace('-', ' ');
    if (name.toLowerCase() === 'the tv') name = 'The TV';
    if (name.toLowerCase() === 'iptv web') name = 'IPTV Web';
    if (name.toLowerCase() === 'tv247us') name = 'TV247 US';
    if (name.toLowerCase() === 'daddylive') name = 'DaddyLive';

    let url = "https://" + domain;

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: `Watch free live television channels online from around the world at ${domain}. Includes news, sports, and entertainment broadcasts.`,
        categoryId: 'live-tv',
        tags: ["Free", "Live TV", "IPTV", "News", "Entertainment"],
        badges: ["Free"],
        rating: Number((4 + Math.random() * 0.9).toFixed(1)), // Random rating between 4.0 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, International"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);

const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Live TV sites in sites.ts!");
