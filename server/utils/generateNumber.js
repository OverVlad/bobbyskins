const randSector = (spec) => {
  const random = Math.random();
  let sum = 0;

  for (let i in spec) {
    sum += spec[i];
    if (random <= sum) return i;
  }
};

const generateNumber = () => {
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

  const sector = randSector({0:0.0667, 1:0.4647, 2:0.4647});

  console.log('sector', sector)

  const numbers = probabilities[sector].numbers;
  console.log('numbers', numbers)

  if(numbers.length <= 1) {
    return 0;
  }

  return Math.floor(Math.random() * (numbers[numbers.length - 1] - numbers[0])) + numbers[0];
};
