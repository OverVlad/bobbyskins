import pokersolver from 'pokersolver'

const winTable = [-1, 2, 3, 5, 8, 20, 50, 125, 310, 775]

export default (hand) => {
  if (pokersolver.Hand.solve(hand).descr === 'Royal Flush') {
    return winTable[9]
  } else {
    return winTable[pokersolver.Hand.solve(hand).rank - 1]
  }
}
