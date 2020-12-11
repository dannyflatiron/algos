class Node {
  constructor(value){
   this.value = value 
   this.left = null
   this.right = null
   this.parent = null
  }

  add(value) {
    if (this.value === null) {
      this.value = value
      return
    }

    if (this.value < value) {
      if (this.right) {
        this.right.add(value)
        return
      }
      const newNode = new Node(value)
      newNode.parent = this
      this.right = newNode
      return
    }

    if (this.value > value) {
      if (this.left) {
        this.left.add(value)
        return
      }
      const newNode = new Node(value)
      newNode.parent = this
      this.left = newNode
      return
    }
  }

  remove(value) {
    const identifiedNode = this.find(value)

    if (!identifiedNode) {
      throw new Error('Could not fnd node with that value')
    }

    if (!identifiedNode.left && !identifiedNode.right) {
      const identifiedParent = identifiedNode.parent
      identifiedParent.removeChild(identifiedNode)
      return
    }

    if (identifiedNode.left && identifiedNode.right) {

    } else {
      const childNode = identifiedNode.left || identifiedNode.right

      identifiedNode.left = childNode.left
      identifiedNode.right = childNode.right
      identifiedNode.value = childNode.value
    }
  }

  removeChild(node) {
    if (this.left && this.left === node) {
      this.left = null
      return
    }

    if (this.right && this.right === node) {
      this.right = null
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