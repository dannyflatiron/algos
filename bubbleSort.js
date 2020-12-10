// compare two items at a time and sort them
// go through entire array multiple times until
// all pairs were compared and sorted

function sort(arr) {
  const resultArray = [...arr]

  for(let outer = 0; outer < resultArray.length; ++outer) {
    let outerElement = resultArray[outer]
    for(let inner = outer + 1; inner < resultArray.length; ++inner) {
      let innerElement = resultArray[inner]

      // [2, 1] => [1, 2]
      if (outerElement > innerElement) {
        resultArray[outer] = innerElement
        resultArray[inner] = outerElement

        outerElement = resultArray[outer]
        innerElement = resultArray[inner]
      }
    }
  }

  return resultArray
}

sort([5, 10, -3, -1, 0, 100, 99])

// time complexity of sort()
// best case: O(1) items are already sorted
// average case: tends to be O(n^2)
// worst case: O(n^2) quadratic time nested loops are activated if array is not already sorted

// space complexity: O(1)