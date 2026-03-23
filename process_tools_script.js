const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/srava/Downloads/open_source_ai_tools_report.md';
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
const tools = [];
let currentCategory = '';
let currentTool = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('## ') && !line.includes('Infrastructure-and-Deployment')) {
        // Skip some main title or conclusion if needed, but report has categories at ##
        currentCategory = line.replace('## ', '').trim();
    } else if (line.startsWith('## Infrastructure-and-Deployment')) {
         currentCategory = 'Infrastructure-and-Deployment';
    } else if (line.startsWith('### ')) {
        if (currentTool) tools.push(currentTool);
        currentTool = {
            id: `os-${tools.length + 1}`,
            name: line.replace('### ', '').trim(),
            url: '',
            logo: '/placeholder.png',
            description: '',
            categoryId: 'open-source-tools',
            tags: [currentCategory],
            badges: ['Free'],
            rating: 4.8,
            addedAt: '2026-03-23',
            language: 'English'
        };
    } else if (line.startsWith('- **Description:**')) {
        if (currentTool) {
            currentTool.description = line.replace('- **Description:**', '').trim().replace(/^:\s*/, '');
        }
    } else if (line.startsWith('- **Link:**')) {
        if (currentTool) {
            currentTool.url = line.replace('- **Link:**', '').trim();
        }
    }
}
if (currentTool) tools.push(currentTool);

const output = `import { Site } from './sites';

export const openSourceTools: Site[] = ${JSON.stringify(tools, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/open-source-tools.ts'), output);
console.log(`Processed ${tools.length} tools.`);
