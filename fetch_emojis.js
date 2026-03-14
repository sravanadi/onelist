const https = require('https');
const fs = require('fs');
const path = require('path');

const emojis = {
    'movies': '1f3ac', // clapper board
    'anime': '1f38e', // japanese dolls
    'manga': '1f4d6', // open book
    'sports': '1f3c8', // american football
    'livetv': '1f4fa', // television
    'torrents': '1f9f2', // magnet
    'games': '1f3ae', // video game
    'music': '1f3b8', // guitar
    'ebooks': '1f4d4', // notebook with decorative cover
    'comics': '1f4a5', // collision
    'asiandrama': '1f3ad', // performing arts
    'adult': '1f51e', // 18+
    'vpn': '1f6e1', // shield
    'adblockers': '1f6ab', // no entry sign
    'newsites': '26a1' // high voltage
};

const dir = 'public/icons';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let pending = 0;

Object.entries(emojis).forEach(([name, code]) => {
    pending++;
    const url = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${code}.png`;
    const dest = path.join(dir, `${name}.png`);
    https.get(url, (res) => {
        if (res.statusCode === 200) {
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${name}.png`);
                pending--;
                if (pending === 0) console.log("All done");
            });
        } else {
            console.error(`Failed to fetch ${name} (${code}): ${res.statusCode}`);
            pending--;
        }
    }).on('error', err => {
        console.error(err);
        pending--;
    });
});
