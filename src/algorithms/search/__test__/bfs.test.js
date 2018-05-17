import bfs from '../bfs';

describe('bfs', () => {
  test('undefined', () => {
    expect(bfs(undefined, '1')).toEqual([]);
    expect(bfs({ '1': [] })).toEqual([]);
    expect(bfs()).toEqual([]);
  });

  test('empty graph', () => {
    expect(bfs({}, '1')).toEqual([]);
  });

  test('one node', () => {
    expect(bfs({ '1': [] }, '1')).toEqual(['1']);
  });

  test('two nodes', () => {
    expect(bfs({ '1': ['2'], '2': [] }, '1')).toEqual(['1', '2']);
    expect(bfs({ '1': ['2'], '2': ['1'] }, '1')).toEqual(['1', '2']);
  });

  test('multiple nodes', () => {
    expect(bfs({ '1': ['2'], '2': ['3'], '3': [] }, '1')).toEqual([
      '1',
      '2',
      '3'
    ]);
    expect(bfs({ '1': ['2', '3'], '2': [], '3': [] }, '1')).toEqual([
      '1',
      '2',
      '3'
    ]);
    expect(
      bfs({ '1': ['2', '3'], '2': [], '3': [], '4': ['2'], '5': ['3'] }, '1')
    ).toEqual(['1', '2', '3']);
    expect(
      bfs({ '1': ['4', '5'], '2': [], '3': [], '4': ['2'], '5': ['3'] }, '1')
    ).toEqual(['1', '4', '5', '2', '3']);
    expect(
      bfs(
        {
          '1': ['4', '5'],
          '2': ['1', '2', '3', '4', '5'],
          '3': [],
          '4': ['2'],
          '5': ['3']
        },
        '1'
      )
    ).toEqual(['1', '4', '5', '2', '3']);
    expect(
      bfs(
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
    expect(bfs(graph, '1')).toEqual(['1', '2', '3', '4', '5', '6']);
    expect(bfs(graph, '2')).toEqual(['2', '1', '4', '5', '3', '6']);
    expect(bfs(graph, '3')).toEqual(['3', '1', '5', '2', '4', '6']);
    expect(bfs(graph, '4')).toEqual(['4', '2', '5', '6', '1', '3']);
    expect(bfs(graph, '5')).toEqual(['5', '2', '3', '4', '6', '1']);
    expect(bfs(graph, '6')).toEqual(['6', '4', '5', '2', '3', '1']);
  });
});
