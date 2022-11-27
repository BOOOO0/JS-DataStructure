import LinkedList from "../DataStructure/LinkedList/LinkedList.js";

const linkedList = new LinkedList();

describe("LinkedList Test", () => {
  test("add elements test", () => {
    linkedList.append(1);
    linkedList.prepend(2);
    linkedList.add(1, 3);

    expect(linkedList.toArray()).toEqual([2, 3, 1]);
  });

  test("getNode test", () => {
    const noCallbackNode = linkedList.getNode({ item: 1 });
    const callbackNode = linkedList.getNode({
      callback: (item) => item > 1 && item < 3,
    });
    expect(noCallbackNode.item).toBe(1);
    expect(callbackNode.item).toBe(2);
  });

  test("shift test", () => {
    expect(linkedList.shift()).toBe(2);
    expect(linkedList.toArray()).toEqual([3, 1]);
  });

  test("pop test", () => {
    expect(linkedList.pop()).toBe(1);
    expect(linkedList.toArray()).toEqual([3]);
  });
});
