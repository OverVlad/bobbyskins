import pokersolver from 'pokersolver'

export default (hand) => {
  if (pokersolver.Hand.solve(hand).descr === 'Royal Flush') {
    return 9
  } else {
    return pokersolver.Hand.solve(hand).rank - 2
  }
}
