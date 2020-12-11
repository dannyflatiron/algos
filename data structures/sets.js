// declaring a set
const ids = new Set()


// adding elements to a set
// sets do not take duplicate elements
ids.add('abc')
ids.add(1)

// sets are iterable
for (const el of ids) {
  console.log(el)
}

// to find an element in a set
ids.has('abc')

// to delete values from a set
ids.delete('abc')


