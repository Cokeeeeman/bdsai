import { find, union, makeSet } from '../other/unionFind';

/**
 * * Find Minimum Spanning Tree: Kruskal's MST
 * 1. Sort edges in non-descreasing order
 * 2. Pick the smallest one, see if the spanning tree constructed so far contians a cycle
 *   if it does, drop this edge and try next one;
 *   if it doesn't, add this edge to current result
 * 3. Repeat 1, 2 until there's V - 1 edges(V is the number of vertices)
 *
 * @param  {WeightedUndirectedGraph} graph Input weighted undirected graph
 * @return {Array}       Edges that forms the MST
 */
const kruskalMST = graph => {
  if (!graph || graph.edges.length < 1) {
    return [];
  }
  const numOfVertices = graph.size();
  const vertices = graph.vertices();
  const cloneEdges = graph.edges.map(e => Object.assign({}, e));
  const sortedEdges = cloneEdges.sort((a, b) => a.weight - b.weight);

  const mst = [];
  const parent = makeSet(vertices);

  let e = 0;
  let i = 0;
  while (e < numOfVertices - 1) {
    const edge = sortedEdges[i];
    const xset = find(parent, edge.src);
    const yset = find(parent, edge.dest);

    if (xset !== yset) {
      mst.push(edge);
      union(parent, xset, yset);
      e += 1;
    }

    i += 1;
  }

  return mst;
};

export default kruskalMST;
