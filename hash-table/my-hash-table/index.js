class HashTable {
  constructor() {
    this.size = 0;
    this.table = new Array(127);
  }
  // DJB2 Hash Function
  _hash(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33) ^ key.charCodeAt(i);
    }
    return Math.abs(hash) % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
      this.table[index].push([key, value]);
      this.size++;
      return;
    }

    // iterate inside all elements in the bucket, if any element has the same key, update the value
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
    this.size++;
  }
  get(key) {
    const index = this._hash(key);

    if (!this.table[index]) {
      return undefined;
    }

    for (const [k, v] of this.table[index]) {
      if (k === key) return v;
    }
  }
  remove(key) {
    const index = this._hash(key);
    if (!this.table[index]) {
      return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }
}

const myHashTable = new HashTable();
myHashTable.set("age", "26");
myHashTable.set("country", "Spain");
myHashTable.remove("country");
console.log(myHashTable);
