const format = (str) => {
  const num = str.toString().replace(/[^0-9\\.]+/g, '')
  return +num
}

export default format
