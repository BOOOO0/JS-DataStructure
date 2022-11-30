import HashTable from "../DataStructure/HashTable/HashTable.js";

const hashTable = new HashTable();

describe("hashtable test", () => {
  test("hash test", () => {
    expect(hashTable.hash("a")).toBe(1);
  });

  test("set test", () => {
    hashTable.set("a", 1);
    hashTable.set("b", 2);

    expect(hashTable.getKeys()).toEqual(["a", "b"]);
    expect(hashTable.getValues()).toEqual([1, 2]);
  });

  test("has test", () => {
    expect(hashTable.has("a")).toBeTruthy();
    expect(hashTable.has("c")).toBeFalsy();
  });

  test("get test", () => {
    expect(hashTable.get("a")).toBe(1);
    expect(hashTable.get("b")).toBe(2);
    expect(hashTable.get("c")).toBe(undefined);
  });
});
