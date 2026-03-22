const fs = require('fs');

let code = fs.readFileSync('src/data/blog.ts', 'utf8');

// Replace author names
code = code.replace(/author:\s*'(StreamAdmin|WeebMaster|TechGuru|DramaLover)'/g, "author: 'OneList Editorial Team'");

// Add bio to end of content
const bio = `\n\n<p><i>Written by the OneList Editorial Team — a group of digital privacy advocates and streaming enthusiasts dedicated to curating the web\\'s best free entertainment and productivity resources. All links are manually reviewed before listing.</i></p>`;

// It matches either `</p>\n        \`,` (template literals) or `</p>',` (single quotes)
// Wait, replacing before the quote or backtick.
code = code.replace(/(<\/p>\s*)(`,|',)/g, '$1' + bio + '$2');

fs.writeFileSync('src/data/blog.ts', code);
console.log('Done updating blog.ts');
