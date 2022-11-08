import Comparator from "../utils/Comparator/Comparator.js";

const comparator = new Comparator();

describe("Comparator Test", () => {
  test("defaultCompareFunction Test", () => {
    expect(comparator.compare(1, 2)).toBeFalsy();
  });
});
