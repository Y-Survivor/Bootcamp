// Import the chalk package
const chalk = require('chalk');

// Simple function to print a colorful header
function printHeader(text) {
  console.log(chalk.bold.bgBlue.white('\n  ' + text + '  \n'));
}

// Function to print a success message
function printSuccess(message) {
  console.log(chalk.green('✓ ') + chalk.green.bold(message));
}

// Function to print an error message
function printError(message) {
  console.log(chalk.red('✗ ') + chalk.red.bold(message));
}

// Function to print a warning message
function printWarning(message) {
  console.log(chalk.yellow('⚠ ') + chalk.yellow.bold(message));
}

// Function to print info message
function printInfo(message) {
  console.log(chalk.blue('ℹ ') + chalk.blue(message));
}

// Function to display a colorful rainbow text
function printRainbow(text) {
  const rainbow = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
  let coloredText = '';
  
  for (let i = 0; i < text.length; i++) {
    const color = rainbow[i % rainbow.length];
    coloredText += chalk[color](text[i]);
  }
  
  console.log(coloredText);
}

// Main function to demonstrate chalk capabilities
function runDemo() {
  printHeader('CHALK DEMO APPLICATION');
  
  console.log('\nBasic color examples:');
  console.log(chalk.blue('This text is blue'));
  console.log(chalk.red('This text is red'));
  console.log(chalk.green('This text is green'));
  console.log(chalk.yellow('This text is yellow'));
  
  console.log('\nText style examples:');
  console.log(chalk.bold('This text is bold'));
  console.log(chalk.italic('This text is italic'));
  console.log(chalk.underline('This text is underlined'));
  console.log(chalk.strikethrough('This text has a strikethrough'));
  
  console.log('\nCombined styling:');
  console.log(chalk.bold.red('This text is bold and red'));
  console.log(chalk.italic.yellow('This text is italic and yellow'));
  console.log(chalk.underline.green('This text is underlined and green'));
  console.log(chalk.blue.bgWhite('This text is blue with white background'));
  
  console.log('\nStatus messages:');
  printSuccess('Task completed successfully!');
  printError('An error occurred while processing the request.');
  printWarning('This action might have unintended consequences.');
  printInfo('The process will take approximately 5 minutes.');
  
  console.log('\nSpecial effects:');
  printRainbow('This text is displayed in rainbow colors!');
  
  console.log('\nVisibility test:');
  console.log(chalk.dim('This text is dimmed'));
  console.log(chalk.visible('This text is visible'));
  console.log(chalk.hidden('This text is hidden (but still takes up space)'));
  
  printHeader('END OF DEMO');
}

// Run the demo
runDemo();