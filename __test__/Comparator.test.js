const Comparator = require("../utils/Comparator/Comparator");

const comparator = new Comparator();

describe("Comparator Test", () => {
  test("defaultCompareFunction Test", () => {
    expect(comparator.compare(1, 2)).toBeFalsy();
  });
});
