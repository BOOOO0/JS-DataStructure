import Comparator from "../utils/Comparator/Comparator.js";

const comparator = new Comparator();

describe("Comparator Test", () => {
  test("defaultCompareFunction Test", () => {
    expect(comparator.compare(1, 1)).toBe(0);
    expect(comparator.compare(1, 2)).toBe(-1);
    expect(comparator.compare(2, 1)).toBe(1);
  });

  test("reverse Test", () => {
    comparator.reverse();
    expect(comparator.compare(1, 1)).toBe(0);
    expect(comparator.compare(1, 2)).toBe(1);
    expect(comparator.compare(2, 1)).toBe(-1);
  });
});
