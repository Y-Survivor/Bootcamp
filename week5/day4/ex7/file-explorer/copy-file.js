/**
 * File copy utility using the Node.js fs module
 * This script copies content from source.txt to destination.txt
 */

const fs = require('fs');
const path = require('path');

// Define file paths
const sourcePath = path.join(__dirname, 'source.txt');
const destinationPath = path.join(__dirname, 'destination.txt');

/**
 * Copies content from one file to another
 */
function copyFile() {
  console.log(`Copying from ${sourcePath} to ${destinationPath}...`);
  
  try {
    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
      console.error(`Error: Source file '${sourcePath}' does not exist.`);
      return;
    }
    
    // Read content from source file
    const content = fs.readFileSync(sourcePath, 'utf8');
    console.log(`Read ${content.length} characters from source file.`);
    
    // Write content to destination file
    fs.writeFileSync(destinationPath, content);
    console.log(`Successfully wrote ${content.length} characters to destination file.`);
    
    // Verify file was created
    if (fs.existsSync(destinationPath)) {
      console.log(`Verified: '${path.basename(destinationPath)}' now exists.`);
    }
    
    console.log('File copy operation completed successfully!');
  } catch (error) {
    console.error(`An error occurred during the file copy operation: ${error.message}`);
  }
}

// Execute the copy operation
copyFile();