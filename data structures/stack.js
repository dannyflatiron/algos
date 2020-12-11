class Stack {
  constructor() {
    this.items = []
  }

  push(value) {
    this.items.push(value)
  }

  pop() {
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }

  toArray() {
    return this.items.slice()
  }
}

const stack = new Stack()

stack.push('Cook dinner!')
stack.push('Wash the dishes')
stack.push('buy ingrediets')


// #################################################################

// building a stack with linked lists

import { LinkedList } from './linkedList.js'

class Stack {
  constructor() {
    this.items = new LinkedList()
  }

  push(value) {
    this.items.push(value)
  }

  pop() {
    return this.list.deleteHead()
  }

  isEmpty() {
    return !this.list.head
  }

  toArray() {
    return this.list.toArray()
  }
}

const stack = new Stack()

stack.push('Cook dinner!')
stack.push('Wash the dishes')
stack.push('buy ingrediets')


// time complexity
// element access: O(1)
// insertion at end: O(1)
// insertion at beginning: O(n) with significant data loss
// insertion in middle: O(n) with significant data loss
// search elements: O(n)

// why use stacks?
// its not a performance optimization case its more so a usage case like ensuring that no one can 
// access elements in the entire array execept for the top