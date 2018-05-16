import dfs from '../dfs';

describe('dfs', () => {
  test('undefined', () => {
    expect(dfs(undefined, '1')).toEqual([]);
    expect(dfs({ '1': [] })).toEqual([]);
    expect(dfs()).toEqual([]);
  });

  test('empty graph', () => {
    expect(dfs({}, '1')).toEqual([]);
  });

  test('one node', () => {
    expect(dfs({ '1': [] }, '1')).toEqual(['1']);
  });

  test('two nodes', () => {
    expect(dfs({ '1': ['2'], '2': [] }, '1')).toEqual(['1', '2']);
    expect(dfs({ '1': ['2'], '2': ['1'] }, '1')).toEqual(['1', '2']);
  });

  test('multiple nodes', () => {
    expect(dfs({ '1': ['2'], '2': ['3'], '3': [] }, '1')).toEqual([
      '1',
      '2',
      '3'
    ]);
    expect(dfs({ '1': ['2', '3'], '2': [], '3': [] }, '1')).toEqual([
      '1',
      '2',
      '3'
    ]);
    expect(
      dfs({ '1': ['2', '3'], '2': [], '3': [], '4': ['2'], '5': ['3'] }, '1')
    ).toEqual(['1', '2', '3']);
    expect(
      dfs({ '1': ['4', '5'], '2': [], '3': [], '4': ['2'], '5': ['3'] }, '1')
    ).toEqual(['1', '4', '2', '5', '3']);
    expect(
      dfs(
        {
          '1': ['4', '5'],
          '2': ['1', '2', '3', '4', '5'],
          '3': [],
          '4': ['2'],
          '5': ['3']
        },
        '1'
      )
    ).toEqual(['1', '4', '2', '3', '5']);
    expect(
      dfs(
        {
          '1': ['1', '2', '3', '4', '5'],
          '2': [],
          '3': [],
          '4': ['2'],
          '5': ['3']
        },
        '1'
      )
    ).toEqual(['1', '2', '3', '4', '5']);
    // Graph taken from https://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/
    const graph = {
      '1': ['2', '3'],
      '2': ['1', '4', '5'],
      '3': ['1', '5'],
      '4': ['2', '5', '6'],
      '5': ['2', '3', '4', '6'],
      '6': ['4', '5']
    };
    expect(dfs(graph, '1')).toEqual(['1', '2', '4', '5', '3', '6']);
    expect(dfs(graph, '2')).toEqual(['2', '1', '3', '5', '4', '6']);
    expect(dfs(graph, '3')).toEqual(['3', '1', '2', '4', '5', '6']);
    expect(dfs(graph, '4')).toEqual(['4', '2', '1', '3', '5', '6']);
    expect(dfs(graph, '5')).toEqual(['5', '2', '1', '3', '4', '6']);
    expect(dfs(graph, '6')).toEqual(['6', '4', '2', '1', '3', '5']);
  });
});
