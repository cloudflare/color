export default h => {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(h)
}
