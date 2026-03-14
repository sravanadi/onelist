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

// Remove old vpn sites
sites = sites.filter(s => s.categoryId !== 'vpn');

const vpnEntries = [
    { name: "NordVPN", domain: "nordvpn.com", isPopular: true },
    { name: "Surfshark VPN", domain: "surfshark.com", isPopular: false },
    { name: "ExpressVPN", domain: "expressvpn.com", isPopular: false },
    { name: "CyberGhost VPN", domain: "cyberghostvpn.com", isPopular: false },
    { name: "Private Internet Access VPN", domain: "privateinternetaccess.com", isPopular: false },
    { name: "VeePN", domain: "veepn.com", isPopular: false }
];

let baseId = 14000;
for (const entry of vpnEntries) {
    const domain = entry.domain;
    let name = entry.name;
    let url = "https://" + domain;

    let desc = `Protect your online privacy and bypass geo-restrictions securely with ${name}.`;
    let tags = ["VPN", "Privacy", "Security"];

    let badges = ["Paid"]; // VPNs are typically paid/subscription-based

    if (entry.isPopular) {
        badges.push("Popular");
        tags.push("Top Rated");
    }

    sites.push({
        id: String(baseId++),
        name: name,
        url: url,
        logo: "/placeholder.png",
        description: desc,
        categoryId: 'vpn',
        tags: tags,
        badges: badges,
        rating: Number((4.5 + Math.random() * 0.4).toFixed(1)), // High ratings for these top VPNs
        addedAt: new Date().toISOString().split('T')[0],
        language: "English, International"
    });
}

const newArrayStr = JSON.stringify(sites, null, 2).replace(/"(Free|Paid|Freemium|18\+|New|Popular|Editor Pick)"/g, '"$1"');
const newFileContent = fileContent.substring(0, startIndex + startMarker.length) + newArrayStr + ";\n\n" + fileContent.substring(endIndex);

fs.writeFileSync('src/data/sites.ts', newFileContent);
console.log("Successfully updated VPN sites in sites.ts!");
