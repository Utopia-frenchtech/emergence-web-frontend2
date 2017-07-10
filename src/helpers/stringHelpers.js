export default {
  isEmpty: (string) => !string || !string.length,
  isLonger: (string, value) => string && string.length > value,
  isSmaller: (string, value) => string && string.length < value,
}
