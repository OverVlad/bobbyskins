import pokerCombinations from '../../configs/pokerCombinations';

const getPokerCombination = (combination) => {
  return pokerCombinations[combination];
}

export default getPokerCombination;
