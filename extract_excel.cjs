const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\Krishiv Patel\\Documents\\Devlopment\\Web\\Contents\\Website contents.xlsx';
const outputPath = 'extracted_content.json';

try {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    const workbook = XLSX.readFile(filePath);
    const result = {};

    workbook.SheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        result[sheetName] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    });

    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(`Content extracted to ${outputPath}`);

} catch (error) {
    console.error('Error extracting content:', error);
}
