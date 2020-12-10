function factRecursive(number) {
  if (number === 1) {
    return 1
  }
  return number * factRecursive(number - 1)
}

// space complexity: O(n)