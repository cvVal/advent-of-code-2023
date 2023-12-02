const fs = require('fs');
const readline = require('readline');

const fileReader = readline.createInterface({
  input: fs.createReadStream('../input.txt'),
  output: process.stdout,
  terminal: false,
});

const numberWordToValue = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

let totalSum = 0;

fileReader.on('line', (currentLine) => {
  const matchedNumberWords = [];

  const matches = Array.from(
    currentLine.matchAll(
      /(?=(one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9))/g
    )
  );

  matches.forEach((match) => {
    matchedNumberWords.push(match[1]);
  });

  const firstDigit = numberWordToValue[matchedNumberWords[0]];
  const lastDigit = numberWordToValue[matchedNumberWords.at(-1)];
  const calibrationValue = parseInt(`${firstDigit}${lastDigit}`);

  totalSum += calibrationValue;
});

fileReader.on('close', () => {
  console.log(`Total: ${totalSum}`);
});
