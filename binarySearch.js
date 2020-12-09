// doesn't work on unordered lists
// find median or element that is in the middle of the array
// if the element that you are looking for wasn't in the middle 
// then take the half of the array in which it must be inside
// since its a sorted array if the item you are looking for is 
// bigger than the first middle item then take the right half of 
// the array if not then take the left half and repeat
// better than linear search (if array is already sorted) because 
// we don't have to go through each element in the array

function findElement(sorterdArr, element) {

  let startIndex = 0
  let endIndex = sorterdArr.length - 1

  while(startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex)/2 )

    if (sorterdArr[middleIndex] === element) {
      return middleIndex
    }

    if (sorterdArr[middleIndex] < element) {
      startIndex = middleIndex + 1
    } else {
      endIndex = middleIndex - 1
    }
  
  }

}

const arr = [1, 5, 9, 13, 99, 100]

findElement(arr, 99)

// time complexity

// best case: O(1) constant time
// average case: tends to be O(log n)
// worst case: O(log n) logarithmic time since we are not visiting every element in the array