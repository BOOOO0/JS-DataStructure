import Queue from "./Queue.js";

let queue = new Queue();

queue.Enqueue(1);
queue.Enqueue(2);
queue.LinkedList.Add(0, 888);
console.log(queue);
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue);
