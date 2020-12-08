function getMin(numbers) {
  let currentMin = numbers [0]

  for (const number of numbers) {
    if (number < currentMin) {
      currentMin = number
    }
  }
  return currentMin
}