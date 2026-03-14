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

// Remove old gambling sites
sites = sites.filter(s => s.categoryId !== 'gambling');

const gamblingEntries = [
    // Crypto Casinos
    { domain: "stake.com", type: "Casino" },
    { domain: "duelbits.com", type: "Casino" },
    { domain: "bitstarz.com", type: "Casino" },
    { domain: "shuffle.com", type: "Casino" },
    { domain: "roobet.com", type: "Casino" },
    { domain: "wild.io", type: "Casino" },
    { domain: "bc.game", type: "Casino" },
    { domain: "rainbet.com", type: "Casino" },
    // CS2 Gambling
    { domain: "skinrave.gg", type: "CS2" },
    { domain: "rain.gg", type: "CS2" }
];

let baseId = 12000;
for (const entry of gamblingEntries) {
    const domain = entry.domain;
    let name = domain.split('.')[0];
    let url = "https://" + domain;

    if (name.toLowerCase() === 'bitstarz') name = 'BitStarz';
    else if (name.toLowerCase() === 'bc') name = 'BC.Game';
    else name = name.charAt(0).toUpperCase() + name.slice(1);

    let desc = `Play top casino games, slots, and bet on sports at ${name}.`;
    let tags = ["Gambling", "Casino", "Crypto"];

    if (entry.type === "CS2") {
        desc = `The best CS2 skin gambling and case opening site: ${name}.`;
        tags = ["CS2 Gambling", "Skins", "Crypto"];
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'gambling',
        tags: tags,
        badges: ["18+"], // Using 18+ badge since gambling isn't technically "Free" in the same way, though sign up is
        rating: Number((4.1 + Math.random() * 0.8).toFixed(1)), // Random rating
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, International"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2).replace(/"(Free|Paid|Freemium|18\+|New|Popular|Editor Pick)"/g, '"$1"');
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Gambling sites in sites.ts!");
