import Compartor from "./Comparator.js";

let arr = [1, 3, 4, 5131, 42, 412334, 1242, 4242, 424233, 22, 22];

let comp = new Compartor();

console.log(comp.compare(1, 1) === 0);

// 정렬에 사용될 수 있다
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (comp.compare(arr[j], arr[j + 1]) < 0) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
}

console.log(arr);

// a < b ? 1 : -1 이 된다고 생각하면 된다
comp.reverse();
// 1
console.log(comp.compare(1, 2));

comp.reverse();
// -1
console.log(comp.compare(1, 2));
