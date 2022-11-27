import DoublyLinkedList from "../DataStructure/DoublyLinkedList/DoublyLinkedList.js";

const doublyLinkedList = new DoublyLinkedList();

describe("DoublyLinkedList Test", () => {
  test("add elements test", () => {
    doublyLinkedList.Append(1);
    doublyLinkedList.Append(2);
    doublyLinkedList.Add(1, 3);

    expect(doublyLinkedList.toArray()).toEqual([1, 3, 2]);
  });

  test("toString test", () => {
    expect(doublyLinkedList.toString()).toEqual(
      expect.stringContaining("1, 3, 2")
    );
  });

  test("shift test", () => {
    expect(doublyLinkedList.Shift()).toBe(1);
    expect(doublyLinkedList.toArray()).toEqual([3, 2]);
  });

  test("pop test", () => {
    expect(doublyLinkedList.Pop()).toBe(2);
    expect(doublyLinkedList.toArray()).toEqual([3]);
  });
});
