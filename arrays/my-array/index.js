class Array {
  constructor(length, items) {
    this.length = length || 0;
    this.items = items || {};
  }

  push(value) {
    this.items[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    this.length--;
    delete this.items[this.length];
    return this.items;
  }

  filter(callback) {
    const newArray = new Array();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.items[i])) {
        newArray.push(this.items[i]);
      }
    }
    return newArray;
  }

  map(callback) {
    const newArray = new Array();
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this.items[i]));
    }
    return newArray;
  }

  sort(compareFn) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const comparedFunction = this.compareFunction(
          this.items[i],
          this.items[j],
          compareFn
        );
        if (comparedFunction > 0) {
          const oldestValue = this.items[i];
          this.items[i] = this.items[j];
          this.items[j] = oldestValue;
        }
      }
    }
    return this;
  }

  some(callback, arg) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this.items[i], arg)) {
        return true;
      }
    }
    return false;
  }

  every(callback, arg) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this.items[i], arg)) {
        return false;
      }
    }
    return true;
  }

  compareFunction(a, b, compareFn) {
    if (compareFn) {
      return compareFn(a, b);
    }
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }
}
