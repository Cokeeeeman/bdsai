/**
 * Implementation of Undirected Graph using Adjacency List
 * 1. Use Map to store all vertices;
 * 2. For each key(vertice), the value is the neighbors in array
 */
class UndirectedGraph {
  constructor() {
    this.nodes = new Map();
  }

  /**
   * Add edge of node1 and node2
   * @param {*} node1
   * @param {*} node2
   */
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

  /**
   * Get neighbors given a node
   * @param  {*} node
   * @return {Array} neighbors of input node
   */
  getNeighbors(node) {
    if (this.nodes.has(node)) {
      return this.nodes.get(node);
    } else {
      throw new Error(`Cannot find node ${node} in the graph`);
    }
  }

  /**
   * Get size of the graph
   * @return {Number} size of the graph
   */
  size() {
    return this.nodes.size;
  }
}

export default UndirectedGraph;
