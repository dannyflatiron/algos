// Maps are like objects 
// in maps keys can be objects however this is not true for regular objects
// maps are iterable with for of loop

// to create a new map

const resultData = new Map()

// to add key value pairs

resultData.set('average', 1.53)
resultData.set('lastResult', null)

const germany = { name: 'Germany', population: 82 }

resultData.set(germany, 0.89)

// iterate

for (const el of resultData) {
  console.log(e)
}

// to change value data

resultData.set('average', 33.89)

// to retrieve the value of a key

resultData.get('average')

// delete element by key

resultData.delete(germany)