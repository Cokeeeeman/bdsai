import { swap } from '../utils';

class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  pop() {
    swap(this.heap, 0, this.heap.length - 1);
    const max = this.heap.pop();
    this.siftDown(0);
    return max;
  }

  peek() {
    return this.heap[0];
  }

  siftUp(index) {
    let child = index;
    let parent = Math.floor((index - 1) / 2);
    while (this.heap[child] > this.heap[parent]) {
      swap(this.heap, parent, child);
      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }

  siftDown(index) {
    let parent = index;
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;
    while (
      (left < this.heap.length && this.heap[left] > this.heap[parent]) ||
      (right < this.heap.length && this.heap[right] > this.heap[parent])
    ) {
      let larggest = left;
      if (this.heap[right] > this.heap[left]) {
        larggest = right;
      }

      swap(this.heap, parent, larggest);
      parent = larggest;
      left = parent * 2 + 1;
      right = parent * 2 + 2;
    }
  }
}

export default BinaryHeap;
