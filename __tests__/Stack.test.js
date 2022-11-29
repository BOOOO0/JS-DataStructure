import Stack from "../DataStructure/Stack/Stack.js";

const stack = new Stack();

describe("stack test", () => {
  test("push test", () => {
    stack.Push(1);
    stack.Push(2);
    stack.Push(3);

    expect(stack.toArray()).toEqual([1, 2, 3]);
  });

  test("peek test", () => {
    expect(stack.Peek()).toBe(3);
    expect(stack.Peek()).toBe(3);
    expect(stack.toArray()).toEqual([1, 2, 3]);
  });

  test("pop test", () => {
    expect(stack.Pop()).toBe(3);
    expect(stack.Pop()).toBe(2);
    expect(stack.toArray()).toEqual([1]);
  });
});
