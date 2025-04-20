const fs = require('fs');

/**
 * Reads the content of a file
 * @param {string} filePath - Path to the file to read
 * @returns {string} - Content of the file
 */
function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`Successfully read from: ${filePath}`);
    return data;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    throw error;
  }
}

/**
 * Writes content to a file
 * @param {string} filePath - Path to the file to write
 * @param {string} content - Content to write to the file
 */
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Successfully wrote to: ${filePath}`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
    throw error;
  }
}

module.exports = {
  readFile,
  writeFile
};