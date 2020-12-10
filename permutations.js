// without repetitions

function getPermutations(options) {
  const permutations = []

  if (options.length === 1) {
    return [options]
  }

  const partialPermutations = getPermutations(options.slice(1))

  const firstOption = options[0]
  
  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i]
    
    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j)
      const permutationAfter = partialPermutation.slice(j)
      permutations.push(permutationInFront.concat([firstOption], permutationAfter))
    }
  }

  return permutations
}


const todoListItems = ['Walk the dog', 'clean the toilet', 'buy groceries', 'order food']

getPermutations(todoListItems)

// time complexity: O(n!) factorial time complexity

// ##################################################################################

// permutations with repetition

function getPermutations(options, length) {
  const permutations = []

  if (length === 1) {
    return options.map(option => [option])
  }

  const partialPermutations = getPermutations(options, length - 1)

  for (const option of options) {
    for (const existingPermuation of partialPermutations) {
      permutations.push([option].concat(existingPermuation))
    }
  }
  return permutations
}


const digits = [1, 2, 3]
const resultLength = 3

getPermutations(digits, resultLength)

// time complexity is dependent on both options and length
// to figure out number of combinations do this math
// # of elements ^ length value => digits has 3 elements & length is 3 => 3^3 = 27 combinations
// time complexity: O(n^r) => n is the number of options, r is the length

