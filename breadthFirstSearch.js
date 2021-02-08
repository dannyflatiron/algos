class Node {
  constructor(name) {
    this.name = name
    this.children =  []
  }

  breadthFirstSearch(array) {
    let queue = [this]
		let currentNode
		
		while (queue.length > 0) {
			currentNode = queue.shift()
			array.push(currentNode.name)
			for (let i = 0; i < currentNode.children.length; i++) {
				queue.push(currentNode.children[i])
			}
		}
		return array
  }
}