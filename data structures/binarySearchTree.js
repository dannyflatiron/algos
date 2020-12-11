class Node {
  constructor(value){
   this.value = value 
   this.left = null
   this.right = null
  }

  add(value) {
    if (this.value === null) {
      this.value = value
      return
    }

    if (this.value < value) {
      const newNode = new Node(value)
      this.right = newNode
      return
    }

    if (this.value > value) {
      this.left = newNode
      return
    }
  }

  find() {
    if (this.value === value) {
      return this
    }

    if (this.value < value && this.right) {
      return this.right.find(value)
    }

    if (this.value < value && this.left) {
      return this.left.find(value)
    }
  }

}

class Tree {
  constructor() {
    this.root = new Node(null)
  }

  add(value) {
    this.root.add(value)
  }

  remove(value) {
    this.root.remove(value)
  }

  find(value) {

  }
}