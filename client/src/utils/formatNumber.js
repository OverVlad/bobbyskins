const format = (str) => {
  let num = str.toString().replace(/[^0-9\\.]+/g, '')
  num = num.replace(/^0+/, '')
  return num
}

export default format
