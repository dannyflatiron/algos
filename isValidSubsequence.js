// given two arrays of integers, write a function 
// that determines whether the second array 
// is a subsequence of the first one

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]


function isValidSubsequence (array, sequence) {
  let sequenceIdx = 0

  for (let i = 0; i < array.length; i++) {
    if (sequenceIdx === sequence.length) {
      return true
    }

    if (sequence[sequenceIdx] === array[i]) {
      sequenceIdx += 1
    }
  }

  return sequenceIdx === sequence.length
}