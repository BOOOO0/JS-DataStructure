import DoublyLinkedList from "./DoublyLinkedList.js";

const list = new DoublyLinkedList();

// list.Append(1);
// list.Append(2);

list.Add(0, 1);
list.Add(0, 2);
// list.Shift();
// list.Pop();
list.Set(0, 3);
list.Set(1, 10000);
console.log(list.toString());
