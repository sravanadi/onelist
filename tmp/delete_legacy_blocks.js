const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'sites.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

// Deleting Manga (Legacy): 1240-1439
// Deleting Music/eBooks/Audiobooks (Legacy): 2302-2720
// Note: Arrays in JS are 0-indexed, so line 1240 is index 1239.
// We remove the high indices first to avoid shifting problems, or filter by original line number.

const newLines = lines.filter((line, index) => {
  const lineNum = index + 1;
  if (lineNum >= 1240 && lineNum <= 1439) return false;
  if (lineNum >= 2302 && lineNum <= 2720) return false;
  return true;
});

fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Successfully deleted legacy duplicate blocks.');
