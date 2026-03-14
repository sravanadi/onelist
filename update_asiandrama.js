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

// Remove old asian-drama sites
sites = sites.filter(s => s.categoryId !== 'asian-drama');

const newDramaDomains = [
    "asiaflix.net",
    "kisskh.id",
    "goplay.su",
    "kissasian.com.lv",
    "dramacool.com.tr",
    "asianctv.cc",
    "myasiantv.com.bz",
    "kisskh.club"
];

let baseId = 11000;
for (const domain of newDramaDomains) {
    let name = domain.split('.')[0];
    let url = "https://" + domain;

    if (name.toLowerCase() === 'asiaflix') name = 'AsiaFlix';
    else if (name.toLowerCase() === 'kisskh') name = 'KissKH';
    else if (name.toLowerCase() === 'goplay') name = 'GoPlay';
    else if (name.toLowerCase() === 'kissasian') name = 'KissAsian';
    else if (name.toLowerCase() === 'dramacool') name = 'DramaCool';
    else if (name.toLowerCase() === 'asianctv') name = 'AsianCTV';
    else if (name.toLowerCase() === 'myasiantv') name = 'MyAsianTV';
    else name = name.charAt(0).toUpperCase() + name.slice(1);

    let desc = `Watch your favorite KDrama, CDrama, and JDrama online for free at ${name} with English subtitles.`;

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'asian-drama',
        tags: ["Free", "KDrama", "CDrama", "Subbed"],
        badges: ["Free"],
        rating: Number((4.1 + Math.random() * 0.8).toFixed(1)), // Random rating between 4.1 and 4.9
        addedAt: new Date().toISOString().split('T')[0],
        language: "Korean, Chinese, Japanese, English Subtitles"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2);
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated Asian Drama sites in sites.ts!");
