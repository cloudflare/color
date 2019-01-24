export default h => {
  const hexMinusHash = h.replace("#", "")
  const a = parseInt(hexMinusHash, 16)
  return a.toString(16) === hexMinusHash.toLowerCase()
}
