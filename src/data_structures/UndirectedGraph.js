class UndirectedGraph {
  constructor() {
    this.nodes = new Map();
  }

  addEdge(node1, node2) {
    if (this.nodes.has(node1)) {
      this.nodes.get(node1).push(node2);
    } else {
      this.nodes.set(node1, [ node2 ]);
    }

    if (this.nodes.has(node2)) {
      this.nodes.get(node2).push(node1);
    } else {
      this.nodes.set(node2, [ node1 ]);
    }
  }

  getNeighbors(node) {
    if (this.nodes.has(node)) {
      return this.nodes.get(node);
    } else {
      throw new Error(`Cannot find node ${node} in the graph`);
    }
  }

  size() {
    return this.nodes.size;
  }
}

export default UndirectedGraph;
