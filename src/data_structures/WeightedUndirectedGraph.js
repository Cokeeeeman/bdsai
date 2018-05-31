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
