const { readFile } = require('fs');

readFile('../input.txt', { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
    return;
  }

  const games = data.trim().split('\n');

  let result = 0;

  games.forEach((game) => {
    const min = {};

    const sets = game.split(':')[1].split(';');

    sets.forEach((set) => {
      const colorsBySet = set
        .split(',')
        .map((colorInSet) => colorInSet.trim().split(' '));

      colorsBySet.forEach(([quantity, color]) => {
        const numQuantity = Number(quantity);

        if (!min[color] || min[color] < numQuantity) {
          min[color] = numQuantity;
        }
      });
    });

    const power = Object.values(min).reduce((acc, number) => acc * number, 1);
    result += power;
  });

  console.log(`Total: ${result}`);
});
