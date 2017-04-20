const randSector = (spec) => {
  const random = Math.random();
  let sum = 0;

  for (let i in spec) {
    sum += spec[i];
    if (random <= sum) return i;
  }
};

exports.generateNumber = () => {
  const probabilities = [
    {
      type: 'zero',
      probability: 0.4647,
      numbers: [0]
    },
    {
      type: 'red',
      probability: 0.0667,
      numbers: [1, 2, 3, 4, 5, 6, 7]
    },
    {
      type: 'black',
      propability: 0.0667,
      numbers: [8, 9, 10, 11, 12, 13, 14]
    }
  ];

  const number = randSector({ 0:0.0667, 1:0.0667, 2:0.0667, 3:0.0667, 4:0.0667, 5:0.0667, 6:0.0667, 7:0.0667, 8:0.0667, 9:0.0667, 10:0.0667,
    11:0.0667, 12:0.0667, 13:0.0667, 14:0.0667 });

  console.log(number);

  return number;
};
