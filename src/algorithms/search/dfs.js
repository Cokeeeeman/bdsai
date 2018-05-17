import Stack from '../../data_structures/Stack';

const dfs = (graph, start) => {
  if (!graph || !start || Object.keys(graph).length === 0) {
    return [];
  }

  const visited = new Set();
  const stack = new Stack();

  stack.push(start);

  while (!stack.isEmpty()) {
    const next = stack.pop();

    visited.add(next);

    const neighbors = graph[next];

    for (let i = neighbors.length - 1; i >= 0; i--) {
      if (!visited.has(neighbors[i])) {
        stack.push(neighbors[i]);
      }
    }
  }

  return Array.from(visited);
};

export default dfs;
