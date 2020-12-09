// similar to a binary search but with recursion
// every recursion algorithm needs a base case to end the recursion

function findElement(arr, element, offset) {
  let startIndex = 0
  let endIndex = arr.length - 1

  
    const middleIndex = startIndex + Math.floor((endIndex - startIndex)/2 )

    // base case
    if (arr[middleIndex] === element) {
      return middleIndex + offset
    }

    if (arr[middleIndex] < element) {
      startIndex = middleIndex + 1
      offset = offset + middleIndex + 1
    } else {
      endIndex = middleIndex - 1
    }
    return findElement(arr.slice(startIndex, endIndex + 1), element, offset) // recursion split #1 // reduction is by 2 // this recursive step has a constant run time 
}

const arr = [1, 5, 9, 13, 99, 100]

findElement(arr, 99, 0)

// master theorem

// O((n^log)(b^a))
// a euqals the number of subproblems (number of recursion splits/calls)
// b equals the relative subproblem size (input reduction per split/by how much is it being reduced)
// f(n) equals the runtime outside of the recursion

// Overall algorithm runtime - three cases
// case #1
// Recursion does more work
// O((n^log)(b^a))

// case 2
// same work inside and outside or recursion
// O((n^log)(b^a)log n)

// case 3
// non-recursive part does more work
// O(fun(n))

// what is the time complexity of recursive step?
// a = 1
// b = 2
// O(n^logb a) => O(n^log2 1) => O(n^0) => O(1)

// what is the time complexity of steps outside of recursive step?
// O(1)

// what is the time complexity of findElement()?
// time complexity outside of recursion matches time complexity of recursive step
// therefore we will use formula from case #2 
// O((n^log)(b^a)log n) => O(1 * log n ) => O(log n)