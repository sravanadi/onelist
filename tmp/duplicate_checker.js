const fs = require('fs');
const content = fs.readFileSync('src/data/sites.ts', 'utf8');
const lines = content.split('\n');
const ids = {};
const names = {};
let found = 0;

lines.forEach((line, i) => {
    // Look for id: "something"
    const idMatch = line.match(/id:\s*["']([^"']+)["']/);
    const nameMatch = line.match(/name:\s*["']([^"']+)["']/);

    if (idMatch) {
        const id = idMatch[1];
        if (ids[id]) {
            console.log(`Duplicate ID "${id}" found on line ${i + 1} (previous occurrence on line ${ids[id]})`);
            found++;
        }
        ids[id] = i + 1;
    }

    if (nameMatch) {
        const name = nameMatch[1];
        if (names[name]) {
            // Only report if they are in the same category (or all for now)
            console.log(`Duplicate Name "${name}" found on line ${i + 1} (previous occurrence on line ${names[name]})`);
            found++;
        }
        names[name] = i + 1;
    }
});

if (found === 0) {
    console.log('No duplicate IDs or Names found.');
} else {
    console.log(`Summary: ${found} duplicates found.`);
}
