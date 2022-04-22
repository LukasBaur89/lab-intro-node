// create sorted list of numbers
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // push value to array
    const pushItem = this.items.push(item);
    // sort array in ascending order
    const sortItems = this.items.sort((a, b) => a - b);
    // update new length
    this.length = this.items.length;
  }

  get(pos) {
    // index pos, this.items.length;
    if (pos <= this.items.length) {
      return pos;
    }
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBonds");
    }
  }

  max() {
    // Math.max, empty = 0 => throw new Error
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    // Math.min
    return Math.min(...this.items);
  }

  sum() {
    // if list = 0
    // reduce, edge case: sortedList empty
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }

  avg() {
    const avg = this.items.reduce((a, b) => a + b) / this.items.length;
    return avg;
  }
}

module.exports = SortedList;
