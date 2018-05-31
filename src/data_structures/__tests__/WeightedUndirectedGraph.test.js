import WeightedUndirectedGraph from '../WeightedUndirectedGraph';

describe('WeightedUndirectedGraph', () => {
  test('constructor()', () => {
    const graph = new WeightedUndirectedGraph();
    expect(graph.edges).toEqual([]);
    expect(graph.nodes).toEqual(new Set());
  });

  test('size()', () => {
    const graph = new WeightedUndirectedGraph();
    expect(graph.size()).toBe(0);
    graph.addEdge(0, 1, 3);
    graph.addEdge(1, 2, 3);
    graph.addEdge(2, 0, 3);
    expect(graph.size()).toBe(3);
  });

  test('vertices()', () => {
    const graph = new WeightedUndirectedGraph();
    expect(graph.vertices()).toEqual([]);
    graph.addEdge(0, 1, 3);
    graph.addEdge(1, 2, 3);
    graph.addEdge(2, 0, 3);
    expect(graph.vertices()).toEqual([0, 1, 2]);
  });

  test('addEdge()', () => {
    const graph = new WeightedUndirectedGraph();
    graph.addEdge(0, 1, 3);
    expect(graph.vertices()).toEqual([0, 1]);
    expect(graph.edges).toEqual([{ src: 0, dest: 1, weight: 3 }]);
    graph.addEdge(1, 2, 3);
    expect(graph.vertices()).toEqual([0, 1, 2]);
    expect(graph.edges).toEqual([
      { src: 0, dest: 1, weight: 3 },
      { src: 1, dest: 2, weight: 3 }
    ]);
    graph.addEdge(2, 0, 3);
    expect(graph.vertices()).toEqual([0, 1, 2]);
    expect(graph.edges).toEqual([
      { src: 0, dest: 1, weight: 3 },
      { src: 1, dest: 2, weight: 3 },
      { src: 2, dest: 0, weight: 3 }
    ]);
  });
});
