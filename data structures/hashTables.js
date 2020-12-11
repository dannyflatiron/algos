class HashTable {
  constructor() {
    this.size = 1000
    this.buckets = Array(1000).fill(null).map(() => [])
  }

  hash(key) {
    let hash = 0
    for (const char of key) {
      hash += char.charCodeAt(0)
    }
    return hash % this.size
  }

  set(key, value) {
    const keyHash = this.hash(key)
    const bucketArray = this.buckets[keyHash]
    const storedElement = bucketArray.find((element) => {
      return element.key === key
    })

    if (storedElement) {
      storedElement.val = value
    } else {
      bucketArray.push({ key: key, val: value })
    }
  }

  get(key) {
    const keyHash = this.hash(key)
    const storedElement = bucketArray.find((element) => {
      return element.key === key
    })

    return storedElement
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {

      }
    }
  }
}

const table = new HashTable()

function findFirstRep(str) {
  const table = new HashTable()
  for (const char of str) {
    if ( table.get(char)) {
      return char
    }
    table.set(char, 1)
  }
}