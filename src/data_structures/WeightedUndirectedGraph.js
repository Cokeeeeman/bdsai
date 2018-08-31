/**
 * Implementation of weighted undirect graph, can be used for
 * weighted directed graph as well.
 *
 * Another way to implement weighted undirected graph is using
 * adjacency matrix:
 * E.g.
           2    3
        (0)--(1)--(2)
        |    / \   |
        6| 8/   \5 |7
        | /      \ |
        (3)-------(4)
             9
   Adjacency matrix would be:
   [[0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]]
   where numbers represent weight  
 */
class WeightedUndirectedGraph {
  constructor() {
    this.edges = [];
    this.nodes = new Set();
  }

  addEdge(src, dest, weight) {
    const edge = {
      src,
      dest,
      weight
    };

    this.edges.push(edge);
    if (!this.nodes.has(src)) {
      this.nodes.add(src);
    }
    if (!this.nodes.has(dest)) {
      this.nodes.add(dest);
    }
  }

  size() {
    return this.nodes.size;
  }

  vertices() {
    return Array.from(this.nodes);
  }
}

export default WeightedUndirectedGraph;
