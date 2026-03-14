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

// Remove old adblocker sites
sites = sites.filter(s => s.categoryId !== 'adblockers');

const adblockEntries = [
    { name: "uBlock Origin", domain: "ublockorigin.com" },
    { name: "AdBlock Plus", domain: "adblockplus.org" },
    { name: "AdGuard", domain: "adguard.com" },
    { name: "AdBlock", domain: "getadblock.com" },
    { name: "Poper Blocker", domain: "poperblocker.com" }
];

let baseId = 15000;
for (const entry of adblockEntries) {
    const domain = entry.domain;
    let name = entry.name;
    let url = "https://" + domain;

    let desc = `Block annoying ads and pop-ups while browsing online using ${name}.`;
    let tags = ["Adblocker", "Extension", "Privacy"];

    if (name === "uBlock Origin") {
        desc = "An efficient, open-source ad blocker that is light on CPU and memory.";
        tags.push("Open Source");
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'adblockers',
        tags: tags,
        badges: ["Free"],
        rating: Number((4.3 + Math.random() * 0.6).toFixed(1)), // High ratings
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, International"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2).replace(/"(Free|Paid|Freemium|18\+|New|Popular|Editor Pick)"/g, '"$1"');
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Adblockers sites in sites.ts!");
