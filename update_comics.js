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

// Remove old comics sites
sites = sites.filter(s => s.categoryId !== 'comics');

const newComicDomains = [
    "readcomiconline.li",
    "xoxocomic.com",
    "readcomicsonline.ru",
    "batcave.biz",
    "getcomics.org"
];

let baseId = 10000;
for (const domain of newComicDomains) {
    let name = domain.split('.')[0];
    let url = "https://" + domain;

    if (name.toLowerCase() === 'readcomiconline') name = 'ReadComicOnline';
    else if (name.toLowerCase() === 'readcomicsonline') name = 'ReadComicsOnline';
    else if (name.toLowerCase() === 'xoxocomic') name = 'XOXO Comic';
    else if (name.toLowerCase() === 'batcave') name = 'Batcave';
    else if (name.toLowerCase() === 'getcomics') name = 'GetComics';
    else name = name.charAt(0).toUpperCase() + name.slice(1);

    let desc = `Read classic and modern comic books for free online at ${name}.`;

    // Custom description for getcomics
    if (name === 'GetComics') {
        desc = `Download thousands of DC, Marvel, and indie comics for free in CBR/CBZ formats at GetComics.`;
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'comics',
        tags: ["Free", "Comics", "DC", "Marvel"],
        badges: ["Free"],
        rating: Number((4.2 + Math.random() * 0.7).toFixed(1)), // Random rating between 4.2 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "English"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Comics sites in sites.ts!");
