import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  // constructor
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // CRUD

  // Add to head
  Prepend(item) {
    const newNode = new LinkedListNode(item, this.head);
    newNode.next = this.head;
    this.head = newNode;

    // tail이 null이다
    // length가 0이다
    // 처음으로 삽입되는 노드이다
    // 라면 tail도 newNode

    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }
  // Add to tail
  Append(item) {
    // 뒤에 추가하는 방식은
    // length가 0이라면 tail은 null이기 때문에
    // null 의 next를 newNode로 지정하는 형태인 것이다
    // 그렇기 때문에 length가 0일때 head와 tail을
    // newNode로 지정해주는 것을 먼저 써야한다.
    const newNode = new LinkedListNode(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  // Add index
  Add(index, item) {
    let searchNode = this.head;
    let prevNode;
    const newNode = new LinkedListNode();
    newNode.item = item;
    if (index === 1) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    } else {
      let searchCount = 1;
      // 도달했을때
      while (searchCount !== index) {
        if (searchCount === index - 1) {
          prevNode = searchNode;
        }
        searchNode = searchNode.next;
        searchCount++;
      }
      prevNode.next = newNode;
      newNode.next = searchNode;
      this.size++;
      return;
    }
  }
  // Get item
  Get(item) {
    let searchNode = this.head;
    while (searchNode) {
      if (searchNode.item === item) {
        return item;
      }
      searchNode = searchNode.next;
    }
    return null;
  }
  // Set item
  Set(index, item) {
    let searchNode = this.head;
    let searchCount = 1;
    while (searchCount !== index) {
      searchNode = searchNode.next;
      searchCount++;
    }
    if (searchCount === index) {
      searchNode.item = item;
      return;
    }
  }
  // Remove tail
  // 단일 연결 리스트는 뒤로 갈 수가 없는데 어떻게 마지막 노드의
  // 이전 노드로 이동할까?
  // 앞에서부터 이동해서 간다면 너무 비효율적이다.
  // 우선은 size 프로퍼티를 새로 만들고
  // 삽입하거나 삭제할때 size 변화를 만들고
  // size - 1 만큼 이동한 후 searchNode의 next를 null로 하는 방법으로
  Pop() {
    let searchNode = this.head;
    let searchCount = 1;
    while (searchCount !== this.size - 1) {
      searchNode = searchNode.next;
      searchCount++;
    }
    this.tail = searchNode;
    searchNode.next = null;
    this.size--;
    return;
  }
  // Remove head
  Shift() {
    let newHead = this.head.next;
    this.head = newHead;
    this.size--;
  }
  Size() {
    return this.size;
  }
  // LinkedList의 내부를 알아보기 위해서
  // 모든 Node들의 item들을 출력해주는 메소드가 필요할 것 같다.
  toArray() {
    let items = [];
    let searchNode = this.head;
    while (searchNode) {
      items.push(searchNode.item);
      searchNode = searchNode.next;
    }
    return items;
  }
  // Array를 만들고 활용하면 오히려 더 쉽게 만들 수 있었다.
  toString() {
    return this.toArray().join(" ");
  }
}