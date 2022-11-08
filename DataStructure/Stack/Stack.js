import LinkedList from "../LinkedList/LinkedList.js";
// head를 스택의 최상단 노드라고 가정한다면
// head쪽으로 삽입하고
// head쪽으로 나오고
// head는 계속 최상단 노드를 업데이트하면서 가리킨다
export default class Stack {
  constructor() {
    this.LinkedList = new LinkedList();
  }
  Push(item) {
    this.LinkedList.Prepend(item);
  }
  Pop() {
    if (this.LinkedList.size === 0) return null;
    return this.LinkedList.Shift();
  }
  Peek() {
    if (this.LinkedList.size === 0) return null;
    return this.LinkedList.head.item;
  }
  toArray() {
    return this.LinkedList.toArray();
  }
  toString() {
    return this.LinkedList.toString();
  }
}
