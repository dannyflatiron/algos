// given an array of available coins
// and a target value
// dervie an algorithm that uses the least amount of coins that reaches that target value


// greedy solution
function cmoputeChange(coins, amount) {
  
  let remainingAmount = amount

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0
  }

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin)
    calculatedChange[coin] = count
    calculatedChange.numberOfCoins += count
    remainingAmount = remainingAmount - coin * count
  }

  return calculatedChange
}


const coins = [100, 50, 20, 10, 5, 2, 1]

const targetAmount = 66

cmoputeChange(coins, targetAmount)

// time complexity: O(n)