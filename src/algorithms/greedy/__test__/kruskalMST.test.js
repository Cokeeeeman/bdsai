import kruskalMST from '../kruskalMST';
import WeightedUndirectedGraph from '../../../data_structures/WeightedUndirectedGraph';

describe('kruskalMST', () => {
  test('graph undefined', () => {
    expect(kruskalMST()).toEqual([]);
  });

  test('graph has no edges', () => {
    const graph = new WeightedUndirectedGraph();
    expect(kruskalMST(graph)).toEqual([]);
  });

  /* Let us create following weighted graph, from geeksforgeeks.org
                 10
            0--------1
            |  \     |
           6|   5\   |15
            |      \ |
            2--------3
                4       
  */
  test('graph has cycle', () => {
    const graph = new WeightedUndirectedGraph();
    graph.addEdge(0, 1, 10);
    graph.addEdge(0, 2, 6);
    graph.addEdge(0, 3, 5);
    graph.addEdge(1, 3, 15);
    graph.addEdge(2, 3, 4);
    expect(kruskalMST(graph)).toEqual([
      { dest: 3, src: 2, weight: 4 },
      { dest: 3, src: 0, weight: 5 },
      { dest: 1, src: 0, weight: 10 }
    ]);
  });
});
