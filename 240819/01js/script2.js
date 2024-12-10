const hello = (name, message = "안녕하세요!") => {
  console.log(`${name}님! ${message}`);
};

hello("원빈", "반갑습니다");
hello("현빈");

const addNum = (...numbers) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(addNum(1, 2, 3, 4, 5));

const fruits = ["apple", "banana", "cherry"];
const favorite = [...fruits];

favorite[1] = "grape";

console.log(fruits, favorite);

const animal = ["bird", "cat"];
const fruits01 = ["melon", "fineapple"];

console.log(animal.concat(fruits01));
console.log([...animal, ...fruits01]);

let [teacher, ...students] = ["Kim", "Lee", "Park", "Choi"];
console.log(teacher, students);

const book = {
  title: "Jabascript",
  pages: 500,
};

book.published = "2024-08-19";

console.log(book);
console.log(book["title"]);

const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수 키",
  [`${add(10, 20)} key`]: "계산 키",
};

console.log(obj);

let user = {
  name: "슛돌이",
};

user.age = 25;

console.log(user);

const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

const user1 = makeUser("영심이", 20);

console.log(user1);

let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2);

const id = Symbol("id");
const tel = Symbol("telephone number");

const member = {
  name: "David",
  age: 20,
  [id]: 1234,
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
};

console.log(member);

for (let item in member) {
  console.log(`${item}`);
}

const fruits02 = ["사과", "복숭아"];

const [apple, peach] = fruits02;

console.log(apple, peach);

const member03 = {
  name: "David",
  age: 20,
};

const { name, age } = member03;
console.log(name, age);
