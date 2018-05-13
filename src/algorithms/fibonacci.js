export const recursive = n => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return recursive(n - 1) + recursive(n - 2);
};

const fibWithMemo = (n, memo) => {
  if (memo[n]) {
    return memo[n];
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  const result = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  memo[n] = result;

  return result;
};

export const memoization = n => fibWithMemo(n, []);

export const bottomUp = n => {
  if (n === 1 || n === 2) {
    return 1;
  }

  let prev = 1;
  let current = 1;
  let next;
  for (let i = 3; i <= n; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }

  return next;
};
