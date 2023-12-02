const { readFile } = require('fs');

readFile('../input.txt', { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
    return;
  }

  const games = data.trim().split('\n');

  let result = 0;

  const maxQuantities = {
    red: 12,
    green: 13,
    blue: 14,
  };

  games.forEach((game, index) => {
    const gameID = index + 1;
    let isValidGame = true;

    const cubeSets = game.split(':')[1].split(';');

    cubeSets.forEach((cubeSet) => {
      const colorsBySet = cubeSet
        .split(',')
        .map((colorInSet) => colorInSet.trim().split(' '));

      colorsBySet.forEach(([quantity, color]) => {
        const numQuantity = Number(quantity);

        if (maxQuantities[color] < numQuantity) {
          isValidGame = false;
        }
      });
    });

    if (isValidGame) {
      result += gameID;
    }
  });

  console.log(`Total: ${result}`);
});
