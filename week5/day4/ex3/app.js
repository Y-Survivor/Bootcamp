// Import the file manager module
const fileManager = require('./fileManager');

// Define file paths
const helloFilePath = './Hello World.txt';
const byeFilePath = './Bye World.txt';

// Read content from Hello World.txt
try {
  const helloContent = fileManager.readFile(helloFilePath);
  console.log(`Content of "${helloFilePath}": ${helloContent}`);
  
  // Write new content to Bye World.txt
  fileManager.writeFile(byeFilePath, 'Writing to the file');
  
  // Read the updated content from Bye World.txt to verify
  const byeContent = fileManager.readFile(byeFilePath);
  console.log(`Updated content of "${byeFilePath}": ${byeContent}`);
  
  console.log('File operations completed successfully!');
} catch (error) {
  console.error('Operation failed:', error);
}