class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  depthFirstSearch(array) {
    // push nodes into array
    array.push(this.name)

    // traverse branch
    for (let i = 0; i < this.children.length; i++) {
      // if node has children call DFS on each children node
      this.children[i].depthFirstSearch(array)
    }

    // return array of nodes 
    return array
  }

}


