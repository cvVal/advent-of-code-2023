const fs = require('fs');
const readline = require('readline');

const fileReader = readline.createInterface({
  input: fs.createReadStream('../input.txt'),
  output: process.stdout,
  terminal: false,
});

let total = 0;

fileReader.on('line', (currentLine) => {
  const firstDigit = parseInt(currentLine.match(/\d/)[0]);
  const lastDigit = parseInt(currentLine.match(/\d(?=\D*$)/)[0]);

  // Concatenate the first and last digits to form a two-digit number
  const calibrationValue = parseInt(`${firstDigit}${lastDigit}`);

  total += calibrationValue;
});

fileReader.on('close', () => {
  console.log(`Total: ${total}`);
});
