import Queue from '../data_structures/Queue';

const bfs = (graph, start) => {
  if (!graph || !start || Object.keys(graph).length === 0) {
    return [];
  }

  const visited = new Set();
  const queue = new Queue();

  queue.enqueue(start);

  while (queue.size !== 0) {
    const next = queue.dequeue();

    visited.add(next);

    const neighbors = graph[next];

    for (let i = 0; i <= neighbors.length - 1; i++) {
      if (!visited.has(neighbors[i])) {
        queue.enqueue(neighbors[i]);
      }
    }
  }

  return Array.from(visited);
};

export default bfs;
