const separate = (str) => {
  let num = str.toString().split('')
  for (let i = 0; i < num.length; i++) {
    if ((i+1)%4 === 0) {
      num.splice(-i, 0, ' ')
    }
  }
  num = num.join('')
  return num
}

export default separate
