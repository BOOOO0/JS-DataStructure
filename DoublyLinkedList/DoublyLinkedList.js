import DoublyLinkedListNode from "./DoublyLinkedListNode.js";
// 순환참조에 대한 문구는 원래 나오는 것
export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  Prepend(item) {
    const newNode = new DoublyLinkedListNode(item);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  Append(item) {
    const newNode = new DoublyLinkedListNode(item);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }
  Add(item, index) {
    const currentNode = this.head;
  }
}
