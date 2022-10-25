import HashTable from "./HashTable.js";

let HT = new HashTable();

HT.set("1", 0);
HT.set(1, 0);
HT.set("1", 1);
HT.set("123", 123123);
console.log(HT.get("1"));
console.log(HT.getKeys());
console.log(HT.getValues());
// console.log(HT.buckets[0].toArray()[0].item);
