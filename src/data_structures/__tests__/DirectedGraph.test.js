import DirectedGraph from '../DirectedGraph';

describe('DirectedGraph', () => {
  test('constructor()', () => {
    const graph = new DirectedGraph();
    expect(graph.size()).toBe(0);
  });

  test('addEdge()', () => {
    const graph = new DirectedGraph();
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 0);
    expect(graph.getDestinations(0)).toEqual([1]);
    expect(graph.getDestinations(1)).toEqual([2]);
    expect(graph.getDestinations(2)).toEqual([0]);
  });

  describe('getDestinations()', () => {
    test('src not in graph', () => {
      const graph = new DirectedGraph();
      try {
        graph.getDestinations(0);
      } catch (e) {
        expect(e.message).toEqual('Cannot find node 0 in the graph');
      }
    });

    test('src in graph', () => {
      const graph = new DirectedGraph();
      graph.addEdge(0, 1);
      graph.addEdge(0, 2);
      expect(graph.getDestinations(0)).toEqual([1, 2]);
    });
  });

  test('size()', () => {
    const graph = new DirectedGraph();
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
