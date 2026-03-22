const fs = require('fs');
let code = fs.readFileSync('src/data/blog.ts', 'utf8');

// The newlines were added before the <p><i>Written by ...
// we can just strip all newlines that appear exactly in this spot.
code = code.replace(/['"`]?\r?\n\r?\n(<p><i>Written by)/g, '\\n\\n$1');

// actually, looking at the code:
// content: '<p>...</p>
//
// <p><i>Written by ...
// So the single quote was started on line 303, then there are literal newlines.
// If I replace \r\n\r\n<p><i> with \n\n<p><i> it doesn't fix the literal newline.
// I should replace the literal newline with \n (escaped n)
code = code.replace(/\r?\n\r?\n(<p><i>Written by)/g, '\\n\\n$1');

fs.writeFileSync('src/data/blog.ts', code);
console.log('Fixed newlines');
