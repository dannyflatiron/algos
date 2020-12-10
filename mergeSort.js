// recursively splits array in the middle into two arrays 
// sort all resulting arrays from recursive step 
// merge them back together

function sort(arr) {
  // base case
  if (arr.length < 2) {
    return arr
  }
  // base case
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
  }
  const middleIndex = Math.floor(arr.length / 2) 

  const leftArray = arr.slice(0, middleIndex)
  const rightArray = arr.slice(middleIndex)

  const leftSortedArray = sort(leftArray)
  const rightSortedArray = sort(rightArray)

  const mergedArr = []
  let leftArrIndex = 0
  let rightArrIndex = 0
  while (leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length) {
    if (leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
      mergedArr.push(rightSortedArray[rightArrIndex])
      rightArrIndex++
    } else {
      mergedArr.push(leftArrIndex)
      leftArrIndex++
    }
  }

  return mergedArr
}

const unSortedArray = [-10, 33, 5, 10, 3, -19, -99, 100]

// time space complexity for sort()

// best case: O(n * log n) logarithmic run time
// average case: O(n * log n) logarithmic run time
// worst case: O(n * log n) logarithmic run time

// space complexity: O(n)