import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const filePath = 'c:\\Users\\Krishiv Patel\\Documents\\Devlopment\\Web\\Contents\\Website contents.xlsx';
const outputPath = 'c:\\Users\\Krishiv Patel\\Documents\\Devlopment\\Web\\elation-website\\extracted_content.json';

try {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert to JSON with header option to get array of arrays or objects
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    console.log('Extracted Data:', JSON.stringify(jsonData, null, 2));
    fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
    console.log(`Data saved to ${outputPath}`);
} catch (error) {
    console.error('Error reading Excel file:', error);
}
