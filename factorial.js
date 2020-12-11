// calculate the factorial of a number
// go through all smaller numbers and multiply them with each other and with the input number
// fact(3); // 3 * 2 * 1 = 6
// fact(5); // 5 * 4 * 3 * 2 * 1 = 120

function fact(number) {
  let result = 1
  for (let i = 2; i <= number; i++) {
    result = result * 1
  }
  return result
}

// time complexity 
// O(n) linear time complexity

// space complexity: O(1)
// in this loop there is no data that is being permanently stored
// because the data is continuously updated
// the only permenantly stored data is number and it has no correlation with n because the space of 
// number will always be 1 
