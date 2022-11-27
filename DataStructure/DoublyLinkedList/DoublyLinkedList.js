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

  Add(index, item) {
    let searchNode = this.head;
    let searchCount = 1;
    const newNode = new DoublyLinkedListNode(item);

    if (index === 0) {
      // 맨 앞에 삽입할 때
      this.Prepend(item);
    } else {
      while (searchNode) {
        if (searchCount === index) break;
        searchNode = searchNode.next;
        searchCount++;
      }
      // 중간에 삽입할 때
      if (searchNode) {
        const prevNode = searchNode;
        const nextNode = searchNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        newNode.prev = prevNode;
      } else {
        // 맨 끝에 삽입할 때
        if (this.tail) {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        } else {
          // 맨 끝이지만 tail이 null이라서 size가 0일 때
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    this.size++;
  }

  Shift() {
    // 0일 때
    if (this.size === 0) return;
    // 1일 때
    let shiftedItem = this.head.item;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
    }

    this.size--;

    return shiftedItem;
  }

  Pop() {
    if (this.size === 0) return;

    let poppedItem = this.tail.item;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }

    this.size--;

    return poppedItem;
  }

  Set(index, item) {
    if (index > this.size) return;

    let searchNode = this.head;
    let searchCount = 0;

    while (searchNode) {
      if (searchCount === index) break;
      searchNode = searchNode.next;
      searchCount++;
    }

    searchNode.item = item;
  }

  Size() {
    return this.size;
  }

  toArray() {
    let items = [];
    let searchNode = this.head;

    while (searchNode) {
      items.push(searchNode.item);
      searchNode = searchNode.next;
    }

    return items;
  }

  toString() {
    return this.toArray().join(", ");
  }
}
