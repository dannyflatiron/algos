// linked lists are efficient for resizing and insertion at start and end of the list


export class LinkedList {
  constructor() {
    this.head = [] // first element or head of the list
    this.tail = [] // last element or tail of the list
  }

  append(value) {
    const newNode = {value: value, next: null}

    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    if (!this.head) {
      this.head = newNode
    }
  }

  prepend(value) {
    const newNode = {value: value, next: this.head}

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue)

    if (existingNode) {
      const newNode = {value: value, next: existingNode.next}
      existingNode.next = newNode
    }
  }

  find(value) {
    if (!this.head) {
      return 
    }

    let curNode = this.head

    while (curNode) {

      if (curNode.value === value) {
        return curNode
      }

      curNode = curNode.next
    }

    return null
  }

  delte(value) {
    if (!this.head) {
      return 
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    let curNode = this.head
    
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next
      } else {
        curNode = curNode.next
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode
    }
  }

  // to remove head element in a stack
  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedItem = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedItem
  }

  toArray() {
    const elements = []

    let curNode = this.head
    while (curNode) {
      elements. push(curNode)
      curNode = curNode.next
    }

    return elements
  }
}

const linkedList1 = new LinkedList()


