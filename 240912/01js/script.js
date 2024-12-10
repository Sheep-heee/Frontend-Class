// const numA = 10;
// const numB = 20;
// const numC = undefined;

// console.log(numA ?? numB);

// const strA = "안녕하세요!";

// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형 아님!");

// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("사과");
//     break;
//   case "banana":
//     console.log("바나나");
//     break;
//   default:
//     console.log("찾는 과일 없음");
// }

// let objA = {};
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA);

// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };

// const keyArrs = Object.keys(person);

// keyArrs.forEach((item) => {
//   let value = person[item];
// });

// const test0 = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };

// const name = test0.name;
// const age = test0.age;
// const skill = test0.skill;

// const { name, age, skill } = test0;

// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());

// console.log(calcA() || calcB());

// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [...arrA, ...arrB];

// console.log(arrC);

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = { c: 3 };

// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log(objC);

let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(newLength);

// const removedItem = food.pop();
// console.log(food, removedItem);

// const newLength = food.unshift("갈비찜");
// console.log(food, newLength);

// const removedItem = food.shift();
// console.log(food, removedItem);

// const sliced = food.slice(0, 2);
// console.log(sliced);

// const arrA = [1, 2];
// const arrB = [3, 4];

// const arrC = arrA.concat(arrB);
// console.log(arrC);

// console.log(food.indexOf("피자"));

// console.log(food.includes("피자"));

// const arr = [
//   { name: "david" },
//   { name: "martin" },
//   { name: "romeo" },
//   { name: "juliet" },
// ];

// const element = arr.find((item) => item.name === "david");
// console.log(element);

// const arr = [
//   { name: "슛돌이", hobby: "축구" },
//   { name: "통키", hobby: "피구" },
//   { name: "강속구", hobby: "야구" },
//   { name: "태백산", hobby: "피구" },
// ];

// const filteredArr = arr.filter((item) => item.hobby === "피구");
// console.log(filteredArr);

// const newArr = arr.map((item) => item.name);
// console.log(newArr);

// const arr1 = [10, 5, 3];
// // arr1.sort(a - b);
// const compare = (a, b) => {
//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
// };

// arr1.sort(compare);

// console.log(arr1);

// console.log(food.join("*"));

const arr3 = [1, 2, 3, 4, 5];
const result = arr3.reduce((acc, item) => acc + item, 0);
console.log(result);
