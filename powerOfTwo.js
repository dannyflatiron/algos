// determine whether an input number is a power of two
// divide number and future division results by two, until 1 
// is reached and check if remainder is always 0

function isPowerOfTwo(number) {

  if (number < 1) {
    return false
  }

  let dividedNumber = number
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false
    }
    dividedNumber = dividedNumber / 2
  }
  return true
}

// best case: O(1) constant time
// average case: O(log n) logarithmic time
// worst case: O(log n) logarithmic time
