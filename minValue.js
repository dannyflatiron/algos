// take an array of numbers as input and return the minimum value in the array

function getMin(numbers) {
  let minNum = numbers[0] // 1

  for (const number of numbers) { // 1
    if (number < minNum) { // n
      minNum = number // 1
    }
  }
  return minNum // 1
}

// Best case: o(n) 
// Worst case: o(n)
// Average case: o(n)

// time space complexity of O(n) linear 