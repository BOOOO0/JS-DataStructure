export default class DoublyLinkedListNode {
  constructor(item, prev = null, next = null) {
    this.item = item;
    this.prev = prev;
    this.next = next;
  }
}
