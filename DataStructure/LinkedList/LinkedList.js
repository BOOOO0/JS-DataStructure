import LinkedListNode from "./LinkedListNode.js";
import Compartor from "../utils/Comparator/Comparator.js";

export default class LinkedList {
  // constructor
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.Compartor = new Compartor();
  }
  // CRUD

  // Add to head
  prepend(item) {
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
  append(item) {
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
  add(index, item) {
    // indexOutOfBounds
    if (index > this.size) {
      return;
    }
    let searchNode = this.head;
    let prevNode;
    const newNode = new LinkedListNode(item);
    if (index === 0) {
      this.Prepend(item);
    } else {
      let searchCount = 0;
      // 도달했을때
      // 수정) index번째 이전 노드를 찾는 조건문 말고
      // index에 도달하면 멈추는 조건문을 가장 먼저 수행되게 해서
      // index 이전 노드를 찾아 그 다음을 newNode로 추가한다.
      while (searchNode) {
        if (searchCount === index) break;
        searchNode = searchNode.next;
        searchCount++;
      }
      if (searchNode) {
        newNode.next = searchNode.next;
        searchNode.next = newNode;
      } else {
        // 리스트의 마지막에 삽입할 때
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          // 몇가지를 수정하기 위해서 참고하는데
          // 이 부분은 어떤 상황에 대한 처리인지 모르겠다
          // 이중연결리스트를 처음부터 하면서 확인해봤는데
          // Add로 처음부터 node를 추가할 때 (size가 0일때) 필요하다
          this.head = newNode;
          this.tail = newNode;
        }
      }
      this.size++;
    }
  }
  // Get item
  // comparator 사용으로 수정
  get(item) {
    if (!this.head) return null;
    let searchNode = this.head;
    while (searchNode) {
      if (item !== undefined && this.Compartor.equal(searchNode.item, item)) {
        return item;
      }
      searchNode = searchNode.next;
    }
    return null;
  }

  getNode({ item = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let searchNode = this.head;

    while (searchNode) {
      // 콜백 함수가 true인 node를 반환
      if (callback && callback(searchNode.item)) {
        return searchNode;
      }
      // 찾고자 하는 item을 가진 node를 반환
      if (item !== undefined && this.compare.equal(searchNode.item, item)) {
        return searchNode;
      }

      searchNode = searchNode.next;
    }

    return null;
  }
  // Set item
  set(index, item) {
    let searchNode = this.head;
    let searchCount = 0;
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
  pop() {
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
  // Queue 의 Poll 기능을 위해 첫번째 원소 return 해주는 것으로 수정
  shift() {
    let oldHead = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return oldHead.item;
  }
  returnSize() {
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
