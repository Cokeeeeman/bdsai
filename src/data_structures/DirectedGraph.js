/**
 * Implementation of Directed Graph using Adjacency List
 * 1. Use Map to store all vertices;
 * 2. For each key(vertice), the value is an array of outgoing edges(or dest vertices)
 */
class DirectedGraph {
  constructor() {
    this.nodes = new Map();
  }

  /**
   * Add edge from src to dest
   * @param {*} src
   * @param {*} dest
   */
  addEdge(src, dest) {
    if (this.nodes.has(src)) {
      this.nodes.get(src).push(dest);
    } else {
      this.nodes.set(src, [dest]);
    }

    if (!this.nodes.has(dest)) {
      this.nodes.set(dest, []);
    }
  }

  /**
   * Get destinations of all outgoing edges for given src
   * @param  {*} src
   * @return {Array} dest vertices of given src
   */
  getDestinations(src) {
    if (!this.nodes.has(src)) {
      throw new Error(`Cannot find node ${src} in the graph`);
    }

    return this.nodes.get(src);
  }

  /**
   * Get size of the graph
   * @return {Number} size of the graph
   */
  size() {
    return this.nodes.size;
  }
}

export default DirectedGraph;
