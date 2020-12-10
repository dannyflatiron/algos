// use recursion
// pivot element is the first element of an array
// pivot element goes into the middlearray
// use pivot elements to split array into three arrays - arrays that consist of bigger, smaller, and equal than the pivot element
// repeat process for all arrays and concat the sorted arrays

function sort(arr) {
  const copiedArray = [...arr]

  // basecase
  if (copiedArray.length <= 1) {
    return copiedArray
  }

  const smallerElementsArray = []
  const biggerElementsArray = []
  // shift() drops first element and returns it and moves remaining items to the left
  const pivotElement = copiedArray.shift()
  const centerElementsArray = [pivotElement]

  while (copiedArray.length) {
    const currentElement = copiedArray.shift()
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement)
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement)
    } else {
      biggerElementsArray.push(currentElement)
    }
  }

  const smallerElementsSortedArray = sort(smallerElementsArray)
  const biggerElementsSortedArray = sort(biggerElementsArray)
  return smallerElementsSortedArray.concat(
    centerElementsArray, biggerElementsSortedArray
  )
}

 unSortedArray = [-3, 10, 1, 100, -10, -3, 22, 15]

//  time complexity of sort()
// best case: O(n * log n) items are sorted randomly
// average case: O(n * log n)
// worst case: O(n^2) quadratic.....items are already sorted which would result in an empty smaller array which would mean the algorithm would have to go through the entire bigger array. also recursive steps that involve loops tend to be quadratic

// space complexity: O(n)