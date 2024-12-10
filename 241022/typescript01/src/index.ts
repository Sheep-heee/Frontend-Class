let num = 1;
num = 10;

let str: string = "Hello";
str = "World";

let bool: boolean = true;

let obj: object = {
  name: "David",
};

let sample: any = 0;

sample = "Hello";

let sample01: undefined = undefined;

let sample02: unknown = 10;
sample02 = "1";

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["David", "Peter"];
const boolArr: Array<boolean> = [true, false, true];

//union 타입
const multiArr: (string | number | boolean)[] = [1, "Hello", true];

//중첩 배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이&타입이 고정된 배열 = Tuple타입
const tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["David", 1],
  ["Romeo", 2],
  ["Juliet", 3],
  ["Peter", 4],
];
