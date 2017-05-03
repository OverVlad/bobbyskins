const fs = require('fs');
// NPM INSTALL --SAVE pokersolver
const pokersolver = require('pokersolver')

const cards = [
  '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad',
  '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As',
  '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac',
  '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah',
];

function k_combinations(set, k) {
  var i, j, combs, head, tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k == set.length) {
    return [set];
  }
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

function sortByRank(arr) {
  console.log('start building')
  const sorted = [[], [], [], [], [], [], [], [], [], []]

  arr.forEach((hand, index) => {
    if (index%10000 === 0) {
      process.stdout.write('\r\x1b[K')
      process.stdout.write(`${index / 10000}/259`)
    }
    const checkedCombination = pokersolver.Hand.solve(hand)
    switch (checkedCombination.rank) {
      case 1:
        sorted[0].push(hand)
        break
      case 2:
        sorted[1].push(hand)
        break
      case 3:
        sorted[2].push(hand)
        break
      case 4:
        sorted[3].push(hand)
        break
      case 5:
        sorted[4].push(hand)
        break
      case 6:
        sorted[5].push(hand)
        break
      case 7:
        sorted[6].push(hand)
        break
      case 8:
        sorted[7].push(hand)
        break
      case 9:
        if (checkedCombination.descr === 'Royal Flush') {
          sorted[9].push(hand)
          break
        } else {
          sorted[8].push(hand)
          break
        }
      default:
        break
    }
  })
  console.log('\nbuilt!')
  return sorted
}

fs.writeFileSync('pokerCombinations.json', JSON.stringify(sortByRank(k_combinations(cards, 5))));
