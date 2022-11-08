const defaultHashTableSize = 32;
class Hash {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = new Array(hashTableSize);
    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAcc, keySymbol) => hashAcc + keySymbol.charCodeAt(0),
      0
    );
    return hash % this.buckets.length;
  }

  set(key, value) {
    this.buckets[this.hash(key)] = value;
    this.keys[key] = this.hash(key);
  }
  get(key) {
    return this.buckets[this.hash(key)];
  }
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
  delete(key) {
    delete this.keys[key];
  }
  getKeys() {
    return Object.keys(this.keys);
  }
  getValues() {
    let keyArray = this.getKeys();
    let values = [];
    for (let x of keyArray) {
      if (this.buckets[x] !== undefined) {
        values.push(this.buckets[x]);
      }
    }
    return values;
  }
}

let hs = new Hash();

hs.set("0", 1);
hs.set("00", 1);
hs.set("11", 2);
console.log(hs);
console.log(hs.get("0"));
console.log(hs.has("0"));
console.log(hs.getKeys());
console.log(hs.getValues());
