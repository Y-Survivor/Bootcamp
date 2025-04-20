/**
 * Directory reader utility using the Node.js fs module
 * This script lists all files in the current directory
 */

const fs = require('fs');
const path = require('path');

/**
 * Reads and displays the contents of a directory
 * @param {string} directoryPath - Path to the directory to read
 */
function readDirectory(directoryPath) {
  console.log(`Reading contents of directory: ${directoryPath}`);
  
  try {
    // Check if directory exists
    if (!fs.existsSync(directoryPath)) {
      console.error(`Error: Directory '${directoryPath}' does not exist.`);
      return;
    }
    
    // Read directory contents
    const files = fs.readdirSync(directoryPath);
    
    // Print header
    console.log('\nDirectory Contents:');
    console.log('------------------');
    
    if (files.length === 0) {
      console.log('(Empty directory)');
    } else {
      // Get file details
      files.forEach((file, index) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        
        // Format file size
        const fileSize = stats.isDirectory() ? '-' : formatFileSize(stats.size);
        
        // Format file type
        const fileType = stats.isDirectory() ? 'Directory' : 'File';
        
        // Format last modified date
        const lastModified = stats.mtime.toLocaleString();
        
        // Print file information
        console.log(`${index + 1}. ${file}`);
        console.log(`   Type: ${fileType}`);
        console.log(`   Size: ${fileSize}`);
        console.log(`   Last Modified: ${lastModified}`);
        console.log('------------------');
      });
      
      console.log(`Total: ${files.length} items`);
    }
  } catch (error) {
    console.error(`An error occurred while reading the directory: ${error.message}`);
  }
}

/**
 * Formats file size in bytes to a human-readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} - Formatted file size
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
}

// Read the current directory by default
const directoryToRead = process.argv[2] || __dirname;
readDirectory(directoryToRead);