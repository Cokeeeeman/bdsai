export const find = (parent, x) => {
  if (parent[x] === x) {
    return x;
  }
  return parent[parent[x]];
};

export const union = (parent, x, y) => {
  parent[x] = y;
};

export const makeSet = vertices => {
  const set = {};
  vertices.forEach(v => {
    set[v] = v;
  });
  return set;
};
