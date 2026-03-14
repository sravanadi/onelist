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

// Remove old ebooks sites
sites = sites.filter(s => s.categoryId !== 'ebooks');

const ebookEntries = [
    // eBooks
    { domain: "z-lib.gd", type: "eBooks" },
    { domain: "annas-archive.li", type: "eBooks" },
    { domain: "libgen.li", type: "eBooks" },
    { domain: "ebook-hunter.org", type: "eBooks" },
    // Audiobooks
    { domain: "galaxyaudiobook.com", type: "Audiobooks" },
    { domain: "audiobookbay.lu", type: "Audiobooks" },
    { domain: "nepu.to", type: "Audiobooks" },
    // eBook Readers
    { domain: "foxit.com", type: "eBook Readers" },
    { domain: "flowoss.com", type: "eBook Readers" }
];

let baseId = 9000;
for (const entry of ebookEntries) {
    const domain = entry.domain;
    let name = domain.split('.')[0];
    let url = "https://" + domain;

    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = name.replace('-', ' ');

    // Clean up names
    if (name.toLowerCase() === 'z lib') name = 'Z-Library';
    if (name.toLowerCase() === 'annas archive') name = "Anna's Archive";
    if (name.toLowerCase() === 'libgen') name = 'Library Genesis';
    if (name.toLowerCase() === 'ebook hunter') name = 'eBook Hunter';
    if (name.toLowerCase() === 'galaxyaudiobook') name = 'Galaxy Audiobook';
    if (name.toLowerCase() === 'audiobookbay') name = 'AudiobookBay';
    if (name.toLowerCase() === 'nepu') name = 'Nepu';
    if (name.toLowerCase() === 'foxit') name = 'Foxit Reader';
    if (name.toLowerCase() === 'flowoss') name = 'Foliate'; // flowoss.com often hosts Foliate or similar

    let desc = `Download and read free eBooks online at ${name}.`;
    let tags = ["Free", "eBooks", "Download"];

    if (entry.type === "eBooks") {
        desc = `Download your favorite eBooks in EPUB and PDF formats directly from ${name}.`;
        tags = ["eBooks", "PDF/EPUB", "Free"];
    } else if (entry.type === "Audiobooks") {
        desc = `Stream and download high-quality audiobooks for free using ${name}.`;
        tags = ["Audiobooks", "Streaming", "Free"];
    } else if (entry.type === "eBook Readers") {
        desc = `Read and organize your digital library with ${name}, a top-rated eBook reader.`;
        tags = ["eBook Reader", "Software", "Free"];
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'ebooks',
        tags: tags,
        badges: ["Free"],
        rating: Number((4.1 + Math.random() * 0.8).toFixed(1)), // Random rating
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, International"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated eBooks sites in sites.ts!");
