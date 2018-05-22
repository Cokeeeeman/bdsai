import UndirectedGraph from '../UndirectedGraph';

describe('UndirectedGraph', () => {
  test('constructor()', () => {
    const graph = new UndirectedGraph();
    expect(graph.size()).toBe(0);
  });

  test('addEdge()', () => {
    const graph = new UndirectedGraph();
    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    expect(graph.getNeighbors(0)).toEqual([1, 4]);
    expect(graph.getNeighbors(1)).toEqual([0, 2, 3, 4]);
    expect(graph.getNeighbors(2)).toEqual([1, 3]);
    expect(graph.getNeighbors(3)).toEqual([1, 2, 4]);
    expect(graph.getNeighbors(4)).toEqual([0, 1, 3]);
  });

  describe('getNeighbors()', () => {
    test('src not in graph', () => {
      const graph = new UndirectedGraph();
      try {
        graph.getNeighbors(0);
      } catch (e) {
        expect(e.message).toEqual('Cannot find node 0 in the graph');
      }
    });

    test('src in graph', () => {
      const graph = new UndirectedGraph();
      graph.addEdge(0, 1);
      graph.addEdge(0, 2);
      expect(graph.getNeighbors(0)).toEqual([1, 2]);
    });
  });

  test('size()', () => {
    const graph = new UndirectedGraph();
    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    expect(graph.size()).toBe(5);
  });
});
