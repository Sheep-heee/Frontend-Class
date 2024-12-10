let hi = "hello";

for (let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2, ch3, ch4, ch5] = hi;
console.log(ch1, ch2, ch3, ch4, ch5);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

let it = arr[Symbol.iterator]();
console.log(it.next());

function* fnc() {
  yield 1;
  yield 2;
  yield 3;
}

fnc();

const g1 = fnc();
console.log(g1.next());
