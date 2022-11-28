import Queue from "../DataStructure/Queue/Queue.js";

const queue = new Queue();

describe("queue test", () => {
  test("enqueue test", () => {
    queue.Enqueue(1);
    queue.Enqueue(2);
    queue.Enqueue(3);

    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  test("dequeue test", () => {
    expect(queue.Dequeue()).toBe(1);
    expect(queue.toArray()).toEqual([2, 3]);
  });

  test("peek test", () => {
    expect(queue.Peek()).toBe(2);
    expect(queue.toArray()).toEqual([2, 3]);
  });
});
