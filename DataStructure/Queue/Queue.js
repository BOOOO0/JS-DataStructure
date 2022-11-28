import LinkedList from "../LinkedList/LinkedList.js";
// 이미 LinkedList가 큐로서의 기능을 대부분 가지고 있다.
// 많은 기능들을 큐 자체가 가진 기능으로 만들고 싶지만
// 오히려 비효율적일 수 있기 때문에 하지 않겠다.
export default class Queue {
  constructor() {
    this.LinkedList = new LinkedList();
  }
  Enqueue(item) {
    this.LinkedList.append(item);
  }
  Dequeue() {
    if (this.LinkedList.size === 0) return null;
    return this.LinkedList.shift();
  }
  Peek() {
    if (this.LinkedList.size === 0) return null;
    return this.LinkedList.head.item;
  }
  // head를 반환하면서 Dequeue시키는 것의 구현이 필요
  // LinkedList 메소드 추가가 필요
  toArray() {
    return this.LinkedList.toArray();
  }
  toString() {
    return this.LinkedList.toString();
  }
}
