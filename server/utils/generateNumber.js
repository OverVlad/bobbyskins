const randSector = (spec) => {
  const random = Math.random();
  let sum = 0;

  for (let i in spec) {
    sum += spec[i];
    if (random <= sum) return i;
  }
};

exports.generateNumber = (max = 14, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

exports.randCombination = () => {
    const number = randSector({ 0:0.5898446, 1:0.31, 2:0.0455, 3:0.0297, 4:0.0147, 5:0.007, 6:0.003, 7:0.00024, 8:0.0000139, 9:0.0000015 });

    return number;
}
