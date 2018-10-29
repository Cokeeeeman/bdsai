const getShortest = (spt, shortest) => {
  let min = Infinity;
  let index = 0;
  for (let i = 0; i < shortest.length; i++) {
    if (!spt[i] && shortest[i] < min) {
      min = shortest[i];
      index = i;
    }
  }
  return index;
};

const dijkstra = (graph, src) => {
  const num = graph.length;
  const spt = Array(num).fill(false);
  const shortest = Array(num).fill(Infinity);

  shortest[src] = 0;

  for (let i = 0; i < num; i++) {
    const picked = getShortest(spt, shortest);
    spt[picked] = true;

    for (let j = 0; j < num; j++) {
      if (
        !spt[j] &&
        graph[picked][j] !== 0 &&
        shortest[picked] + graph[picked][j] < shortest[j]
      ) {
        shortest[j] = shortest[picked] + graph[picked][j];
      }
    }
  }
  return shortest;
};

export default dijkstra;
