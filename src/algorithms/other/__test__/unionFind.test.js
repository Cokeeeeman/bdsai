import { find, union, makeSet } from '../unionFind';

describe('unionFind', () => {
  describe('find()', () => {
    test('vertice is the rep of its own subset', () => {
      const parent = { '1': '1' };
      expect(find(parent, '1')).toBe('1');
    });

    test('vertice is not the rep of its own subset', () => {
      const parent = {
        '1': '1',
        '2': '1'
      };
      expect(find(parent, '2')).toBe('1');
    });
  });

  test('union()', () => {
    const parent = {
      '1': '2',
      '2': '2',
      '3': '3'
    };
    union(parent, '2', '3');
    expect(parent['2']).toBe('3');
  });

  test('makeSet()', () => {
    const vertices = ['0', '1', '2'];
    expect(makeSet(vertices)).toEqual({
      '0': '0',
      '1': '1',
      '2': '2'
    });
  });
});
