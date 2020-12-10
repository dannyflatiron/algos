// works with only two sets
function cartProduct(setA, setB) {
  const product = []
  for (const setAElement of setA) {
    for (const setBElement of setB) {
      product.push([setAElement, setBElement])
    }
  }

  return product
}


const colors = ['blue', 'red']
const sizes = ['m', 'l']

cartProduct(colors, sizes)
// expected result
// an array of two new products

// time complexity: O(n*m) if arrays are of different lengths, O(n^2) if arrays are of same lengths
// space complexity: O(n*m) if arrays are of different lengths, O(n^2) if arrays are of same lengths


function cartProduct(setA, setB) {
  const product = []
  for (let setAElement of setA) {
    if (!Array.isArray(setAElement)) {
      setAElement = [setAElement]
    }
    for (const setBElement of setB) {
      product.push([...setAElement, setBElement])
    }
  }

  return product
}

function cartesian(...sets) {
  let tempProduct = sets[0]

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i])
  }

  return tempProduct
}

const colors = ['blue', 'red']
const sizes = ['m', 'l', 'xl']
const styles = ['round neck', 'v neck']

cartesian(colors, sizes, styles)

// time complexity: O(n^x) unlimited amount of input arrays
// space complexity: O(n^x)