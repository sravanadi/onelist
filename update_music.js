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

// Remove old music sites
sites = sites.filter(s => s.categoryId !== 'music');

const musicEntries = [
    // Spotify
    { domain: "spotdownloader.com", type: "Spotify" },
    { domain: "spotifymate.com", type: "Spotify" },
    { domain: "spotmate.online", type: "Spotify" },
    // YouTube
    { domain: "y2mate.nu", type: "YouTube" },
    { domain: "azmp3.cc", type: "YouTube" },
    { domain: "ytmp3.cc", type: "YouTube" },
    // Multiple
    { domain: "racoon", type: "Multiple", overrideUrl: "https://racoon.to" }, // Assuming a valid URL if missing TLD
    { domain: "ytiz.xyz", type: "Multiple" },
    { domain: "lucida.to", type: "Multiple" },
    { domain: "cobalt.tools", type: "Multiple" },
    // Software
    { domain: "slsknet.org", type: "Software" },
    { domain: "spotube.dev", type: "Software" },
    { domain: "github.io/downline", type: "Software", overrideName: 'Downline', overrideUrl: "https://github.io/downline" }
];

let baseId = 8000;
for (const entry of musicEntries) {
    const domain = entry.domain;
    let name = entry.overrideName || domain.split('.')[0];
    let url = entry.overrideUrl || "https://" + domain;

    if (!entry.overrideName) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        // Clean up names
        if (name.toLowerCase() === 'spotdownloader') name = 'SpotDownloader';
        if (name.toLowerCase() === 'spotifymate') name = 'SpotifyMate';
        if (name.toLowerCase() === 'spotmate') name = 'SpotMate';
        if (name.toLowerCase() === 'y2mate') name = 'Y2Mate';
        if (name.toLowerCase() === 'ytmp3') name = 'YTMP3';
        if (name.toLowerCase() === 'azmp3') name = 'AZMP3';
        if (name.toLowerCase() === 'slsknet') name = 'Soulseek';
        if (name.toLowerCase() === 'spotube') name = 'Spotube';
    }

    let desc = `Download and stream high quality music for free using ${name}.`;
    let tags = ["Free", "Music", "Download"];

    if (entry.type === "Spotify") {
        desc = `Download your favorite tracks and playlists directly from Spotify using ${name}.`;
        tags = ["Spotify Downloader", "MP3", "Free"];
    } else if (entry.type === "YouTube") {
        desc = `Convert and download YouTube videos to MP3 high quality audio using ${name}.`;
        tags = ["YouTube to MP3", "Converter", "Free"];
    } else if (entry.type === "Multiple") {
        desc = `A versatile downloader supporting multiple platforms including Spotify, Soundcloud, and YouTube via ${name}.`;
        tags = ["Multi-Platform", "Downloader", "Free"];
    } else if (entry.type === "Software") {
        desc = `Free, open source desktop software for discovering and downloading music: ${name}.`;
        tags = ["Software", "P2P", "Open Source"];
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'music',
        tags: tags,
        badges: ["Free"],
        rating: Number((4.0 + Math.random() * 0.9).toFixed(1)), // Random rating
        addedAt: new Date().toISOString().split('T')[0],
        language: "English"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Music sites in sites.ts!");
