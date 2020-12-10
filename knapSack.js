// you got a list of items where every item has a value and a weight
// you got a bag that holds a maximum weight of X
// write a program that maximizes the value of the items you put 
// into the bag whilst ensuring that you don't exceed 
// the maximum weight

items = [
  {id: 'a', val: 3, w: 3},
  {id: 'b', val: 6, w: 8},
  {id: 'c', val: 10, w: 3},
]

maxWeight = 8

// solution bag = ['a', 'c']

// ########################################################################################


// verify problem/ask questions
// ex: can items be used multiple times?

// derive a first verbal solution
// ex: we could derive all possible combinations and find the one with the highest value and fitting weight



function knapsack(items, capacity, itemIndex) {
  // base case
  if (capacity === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0}
  }

  if (capacity < items[itemIndex].weight) {
    return knapsack(items, capacity, itemIndex - 1)
  }

  const sackWithItem = knapsack(items, capacity - items[itemIndex].weight, itemIndex - 1)
  const sackWithoutItem = knapsack(items, capacity, itemIndex - 1)

  const valueWithItem = sackWithItem.value + items[itemIndex].value
  const valueWithoutItem = sackWithoutItem.value

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight
    }
    return updatedSack
  } else {
    return sackWithoutItem
  }
  
}

const items = [
  {id: 'a', value: 3, weight: 3},
  {id: 'b', value: 6, weight: 8},
  {id: 'c', value: 10, weight: 3},
]

const maxWeight = 8

const sack = knapsack(items, maxWeight, items.length - 1)
console.log(sack)