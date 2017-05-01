import pokersolver from 'pokersolver'

const winTable = [-1, 10, 20, 30, 40, 50, 60, 70, 80, 90]

export default (hand) => {
  if (pokersolver.Hand.solve(hand).descr === 'Royal Flush') {
    return winTable[9]
  } else {
    return winTable[pokersolver.Hand.solve(hand).rank - 1]
  }
}
