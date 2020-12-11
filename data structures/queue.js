class Queue {
  constructor() {
    this.items = []
  }

  endqueue() {
    this.items.unshift(value)
  }

  // first in first out
  dequeue() {
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }

  toArray() {
    return this.items.slice()
  }
}

const queue = new Queue()
// adding elements to array
queue.endqueue('Danny')
queue.endqueue('Mary')

queue.dequeue() // would remove Danny from array

// ########################################################################

// building queues with linked lists

import { LinkedList } from './linkedList.js'

class Queue {
  constructor() {
    this.list = new LinkedList()
  }

  endqueue() {
    this.list.append(value)
  }

  // first in first out
  dequeue() {
    return this.deleteHead()
  }

  isEmpty() {
    return this.list.length === 0
  }

  toArray() {
    return this.list.slice()
  }
}

const queue = new Queue()
// adding elements to array
queue.endqueue('Danny')
queue.endqueue('Mary')

queue.dequeue() // would remove Danny from array