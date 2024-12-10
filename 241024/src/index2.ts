// const func = (a: number, b: number): number => {
//   return a + b;
// };

// const func1 = (name = "David"): void => {
//   console.log(`name: ${name}`);
// };

// const self = (name = "사용자", age: number, tall?: number): void => {
//   console.log(`${age}세 ${name}님 반갑습니다!`);
//   if (typeof tall === "number") {
//     console.log(`${name}님의 키는 ${tall} 입니다.`);
//   }
// };

// const getItem = (...rest: number[]): number => {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// };

// const getItem = (...rest: [number, number, number]): number => {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// };

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
