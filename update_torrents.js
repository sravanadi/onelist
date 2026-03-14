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

// Remove old torrent sites
sites = sites.filter(s => s.categoryId !== 'torrents');

const newTorrentDomains = [
    { domain: "1337x.to", note: "" },
    { domain: "rutracker.org", note: "" },
    { domain: "limetorrents.fun", note: "" },
    { domain: "yts.bz", note: "Movies" },
    { domain: "eztvx.to", note: "TV Shows" },
    { domain: "torrentgalaxy.one", note: "" },
    { domain: "extratorrent.st", note: "" },
    { domain: "ext.to", note: "" },
    { domain: "rargb.to", note: "" },
    { domain: "thepiratebay.org", note: "Use at your own risk" }
];

let baseId = 6000;
for (const item of newTorrentDomains) {
    const domain = item.domain;
    let name = domain.split('.')[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Special formatting
    if (name.toLowerCase() === 'limetorrents') name = 'LimeTorrents';
    if (name.toLowerCase() === 'yts') name = 'YTS';
    if (name.toLowerCase() === 'eztvx') name = 'EZTV';
    if (name.toLowerCase() === 'torrentgalaxy') name = 'TorrentGalaxy';
    if (name.toLowerCase() === 'extratorrent') name = 'ExtraTorrent';
    if (name.toLowerCase() === 'rargb') name = 'RARBG';
    if (name.toLowerCase() === 'thepiratebay') name = 'The Pirate Bay';

    let url = "https://" + domain;
    let desc = `Download free torrents from ${name}, offering high quality P2P sharing.`;

    let tags = ["Free", "Torrents", "P2P"];

    if (item.note === 'Movies') {
        tags.push("Movies");
        desc = `Download high quality movie torrents from ${name}.`;
    }
    if (item.note === 'TV Shows') {
        tags.push("TV Shows");
        desc = `Download the latest TV show torrents from ${name}.`;
    }
    if (item.note === 'Use at your own risk') {
        desc = `${name} is a legendary torrent index. Use a VPN and proceed at your own risk.`;
        tags.push("Risky");
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'torrents',
        tags: tags,
        badges: ["Free"],
        rating: Number((4 + Math.random() * 0.9).toFixed(1)), // Random rating between 4.0 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, International"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);

const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Torrents sites in sites.ts!");
