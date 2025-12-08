const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

async function extractAll() {
    const files = [
        'c:/Users/Krishiv Patel/Documents/Devlopment/Web/Contents/Cusotmer Says.docx',
        'c:/Users/Krishiv Patel/Documents/Devlopment/Web/Contents/Our team.docx',
        'c:/Users/Krishiv Patel/Documents/Devlopment/Web/Contents/Career.docx'
    ];

    const results = {};

    for (const file of files) {
        try {
            const result = await mammoth.extractRawText({ path: file });
            const name = path.basename(file, '.docx');
            results[name] = result.value;
            console.log(`\n=== ${name} ===\n`);
            console.log(result.value);
            console.log('\n' + '='.repeat(50));
        } catch (err) {
            console.error(`Error reading ${file}:`, err.message);
        }
    }

    fs.writeFileSync('extracted_docx_content.json', JSON.stringify(results, null, 2));
}

extractAll();
