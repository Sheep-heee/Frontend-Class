// type A = () => number;
// type B = () => 10;

// let a: A = () => 10;
// let b: B = () => 10;

// a = b;
// b = a;

// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // c = d;
// d = c;

// type Animal = {
//   name: string;
// };

// let animalFunc = (animal: Animal): void => {
//   console.log(animal.name);
// };

// type Dog = {
//   name: string;
//   color: string;
// };

// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// animalFunc = dogFunc;
// dogFunc = animalFunc;

// type Func1 = (a: number, b: number) => void;
// type Func2 = (a: number) => void;

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// function func(a: number): void;
// function func(a: number, b: number, c: number): void;

// function func(a: number, b?: number, c?: number) {
//   if (typeof b === "number" && typeof c === "number") {
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// }

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// const warning = (animal: Animal) => {
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다." : "안짖어요");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다." : "안할퀴어요");
//   }
// };

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};

const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
};
