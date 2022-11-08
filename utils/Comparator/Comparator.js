// 연결리스트~스택까지의 구현은
// comparator의 구현이 필수적이라고 느껴지지 않았다
// 하지만 heap의 구현에서 부터는 compare하는 로직을 가진
// 하나의 객체가 있으면 활용도가 높다고 생각이 들었다

// 활용 예시
// searchNode가 계속 진행해 나가면서
// 현재 값과 다음 노드의 값을 비교하는 연산을 반복하고 - 여기가 Comparator의 역할
// 연산의 결과에 따라 어떤 로직을 수행하는 경우

// Comparator
// 연산의 결과에 따라 -1 , 1 , 0 을 반환한다
export default class Compartor {
  // 기본적으로 compare하는 로직은 대부분이
  // a와 b가 같으면 0
  // a가 b보다 크면 -1
  // a가 b보다 작으면 1
  constructor(compareFunction) {
    this.compare = compareFunction || Compartor.defaultCompareFunction;
  }
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  equal(a, b) {
    // default함수는 a와 b가 같으면 0을 반환한다
    // 그리고 반환된 0이 0과 같아서 true인지 달라서 false인지를 반환한다
    return this.compare(a, b) === 0;
  }
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
    // compareOriginal  == compare == defaultCompareFunction
    // compare == (a,b) => compareOriginal(b,a) == compare(b,a);
  }
}
