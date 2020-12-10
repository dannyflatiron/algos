// linear search works on ordered and unordered lists
// iterate through entire array and find comparison

function findElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      let position = i
      return position
    }
  }
} 

const person = { name: 'Manu', age: 33 }

const arr = [5, 3, -1, 33, 51]
const objects = [
  { name: 'Max', age: 31 },
  person,
]

findElement(objects, person)

