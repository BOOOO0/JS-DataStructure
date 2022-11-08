import LinkedList from "../LinkedList/LinkedList.js";
const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    // 해쉬 충돌을 해결하기 위해서 같은 key를 가진 value들을
    // 연결리스트로 관리해주기 위해서 hashTableSize만큼의 배열을 각 원소를
    // 연결리스트를 가지는 2차원 배열로 선언해준다
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }
  // 해싱 알고리즘은 최대한 key의 충돌을 피하는 방향으로 만들어야 한다
  // 하나의 답이 정해져 있지는 않다
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAcc, keySymbol) => hashAcc + keySymbol.charCodeAt(0),
      0
    );
    return hash % this.buckets.length;
  }
  set(key, value) {
    // keys에 key, hashKey add
    const hashKey = this.hash(key);
    this.keys[key] = hashKey;

    const bucketLinkedList = this.buckets[hashKey];
    // 이미 해당 key를 가진 node가 있는지 찾는다
    const node = bucketLinkedList.getNode({
      callback: (nodeItem) => nodeItem.key === key,
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      // key를 가진 node가 있다면 덮어씌운다
      node.item.value = value;
    }
  }
  delete(key) {
    const hashKey = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[hashKey];
    const node = bucketLinkedList.getNode({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.getNode({
      callback: (nodeValue) => nodeValue.key === key,
    });

    return node ? node.item.value : undefined;
  }
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
  getKeys() {
    return Object.keys(this.keys);
  }
  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket
        .toArray()
        .map((linkedListNode) => linkedListNode.value);
      return values.concat(bucketValues);
    }, []);
  }
}
