// colorful-message.js
const chalk = require('chalk').default;

function displayColorfulMessage() {
    console.log(chalk.blue.bgYellow.bold('This is a colorful message!'));
}

module.exports = displayColorfulMessage;