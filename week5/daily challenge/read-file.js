// read-file.js
const fs = require('fs');
const path = require('path');

function displayFileContent() {
    const filePath = path.join(__dirname, 'files', 'file-data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:');
        console.log(data);
    });
}

module.exports = displayFileContent;