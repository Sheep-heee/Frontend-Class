// const numArr: number[] = [1, 2, 3];
// const strArr: string[] = ["hello", "world"];
// const boolArr: Array<boolean> = [true, false, true];

// let multiArr: (number | string)[] = [1, "hello"];

// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5],
// ];

// let tup1: [number, number] = [1, 2];

//실무에서는 거의 안씀 (값을 불러올 때 type error 발생)
// const user: object = {
//   id: 1,
//   name: "David",
// };

// //구조적 타입 시스템을 적용한 방법
// const user1: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "David",
// };

// //점진적 타입 시스템을 적용한 방법
// const user2: {
//   id?: number;
//   name: string;
// } = {
//   name: "David",
// };

// //선택적 타입 시스템을 적용한 방법
// let config: {
//   readonly apikey: string;
// } = {
//   apikey: "13534384351",
// };

// //타입 별칭 (대부분 대문자로 시작)
// //전역에서는 재선언 불가 (지역에서는 가능)
// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// const user3: User = {
//   id: 1,
//   name: "David",
//   location: "Seoul",
// };
// const user4: User = {
//   id: 2,
//   name: "Peter",
//   location: "Incheon",
// };

// //인덱스 시그니처
// //타입 정의 후 -> 하위 요소의 모든 타입의 형태가 동일한 경우
// type CountryCodes = {
//   [key: string]: string;
// };

// const countryCodes: CountryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
// };

// interface User01 {
//   id: number;
// }

// interface Person {
//   name: string;
//   age: number;
//   etc?: boolean;
// }

// const person: Person = {
//   name: "Peter",
//   age: 20,
// };

// class Person1 {
//   name: string;
//   age: number;
// }

// const person1: Person1 = new Person1();
// person1.name = "Peter";
// person1.age = 20;

// console.log(person1);

// class Person2 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person3 {
//   constructor(public name: string, public age: number) {}
// }

// const person2 = new Person3("Romeo", 20);
// console.log(person2);

// interface Person4 {
//   name: string;
//   age: number;
// }

// class Person5 implements Person4 {
//   constructor(public name: string, public age: number) {}
// }

// const person3 = new Person5("Juliet", 20);
// console.log(person3);

//추상클래스 선언
// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// //extends : 기존의 타입(모체)에서 확장
// class Person8 extends Person7 {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const person06 = new Person8("Bruce", 20);
// console.log(person06);

// //static 속성
// class TestA {
//   static initialValue = 1;
// }

// const test01A = TestA.initialValue;

// console.log(test01A);

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "David",
//   role: Role.ADMIN,
// };
// const user2 = {
//   name: "DDooDDoo",
//   role: Role.USER,
// };
// const user3 = {
//   name: "Lulu",
//   role: Role.GUEST,
// };

// console.log(user1, user2, user3);

// let test01: any = 10;
// test01 = "Hello";

// let test02: unknown;

// test02 = "World";
// test02 = 1;
// test02 = () => {};

// let test03 = test01;

// let test04: number = 20;

// //타입 제한 적용
// if (typeof test02 === "number") {
//   test04 = test02;
// }

// const func1 = (): string => {
//   return "hello";
// };

// const func2 = (): void => {
//   console.log("World");
// };

// let obj: object = {
//   name: "David",
// };

// interface Nameable {
//   name: string;
// }

// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// console.log(name1, name2);

const add = (a: number, b: number): number => {
  return a + b;
};

// const printMe = (name: string, age: number): void => {
//   console.log(`name : ${name}, age : ${age}`);
// };

// const printMe: (arg01: string, arg02: number) => void = (name, age) => {
//   console.log(`name : ${name}, age : ${age}`);
// };

// type PrintMeFnc = (name: string, age: number) => void;

// const printMe: PrintMeFnc = (name, age) => {
//   console.log(`name : ${name}, age : ${age}`);
// };

// interface Nameable02 {
//   name: string;
// }

// const getName = (o: Nameable02) => {
//   return o != undefined ? o.name : "Loading...";
// };

// const dataResult = getName(undefined);

// console.log(dataResult);
// console.log(getName({ name: "David" }));

interface Nameable02 {
  name: string;
}

const getName = (o: Nameable02 | undefined) => {
  return o != undefined ? o.name : "Loading...";
};
