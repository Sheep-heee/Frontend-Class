// let bag = new Map();

// bag.set("color", "red");

// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup);

console.log(myCup.get("color"));
console.log(myCup.size);
console.log(myCup.has("color"));
console.log(myCup.delete("type"));
console.log(myCup);
// console.log(myCup.clear());
// console.log(myCup);
console.log(myCup.keys());
console.log(myCup.values());
console.log(myCup.entries());

for (let key of myCup.keys()) {
  console.log(key);
}
