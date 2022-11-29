import LinkedList from "../LinkedList/LinkedList.js";

export default class Stack {
  constructor() {
    this.LinkedList = new LinkedList();
  }
  Push(item) {
    this.LinkedList.append(item);
  }
  Pop() {
    if (this.LinkedList.size === 0) return null;
    return this.LinkedList.pop();
  }
  Peek() {
    if (this.LinkedList.size === 0) return null;
    return this.LinkedList.tail.item;
  }
  toArray() {
    return this.LinkedList.toArray();
  }
  toString() {
    return this.LinkedList.toString();
  }
}
