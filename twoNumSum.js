// write a function that takes in an array of unique integers 
// and an integer representing a target sum
// if any two numbers in the input array sum up to the target sum
// the function should return them in array in any order
// if no two numbers sum up to the target sum
// return an empty array

const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

// brute force solution
function twoNumberSum (array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i]
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j]
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }

  return []
}

// time complexity: O(n^2)
// space complexity: O(1)

// -----------------------------------------------------------------

// optimized solution

function twoNumberSum (array, targetSum) {
  const nums = {}

  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    let potentialDiff = targetSum - num

    if (numns[potentialDiff]) {
      return [potentialDiff, num]
    } else {
      nums[num] = true
    }
  }

  return []
}

function twoNumberSum(array, targetSum) {
  
  
	for (let firstPointer = 0; firstPointer < array.length; firstPointer++) {
		let currNum = array[firstPointer] // first num
		for (let secondPointer = firstPointer + 1; secondPointer < array.length; secondPointer++) {
			let secondCurrNum = array[secondPointer] // second num
      if (currNum + secondCurrNum === targetSum) {
				return [currNum, secondCurrNum]
			}
		}
  }

  return []
}

// time complexity: O(n)
// space complexity: O(n)

function twoNumberSum(array, targetSum) {
    
    const nums = {} // hash table
    
    for (let i = 0; i < array.length; i++) {
      let num = array[i]
      const potentialMatch = targetSum - num
      
      if (nums[num]) {
        return [num, potentialMatch] // answer
      } else (
        nums[potentialMatch] = true // stores potentialMatch in hash table nums
      )
    }
    
    return []	
  }