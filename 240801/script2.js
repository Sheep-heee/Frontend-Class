// // CB1
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
// };
// setInterval(cbFunc, 300);

// map함수는 배열 안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산작업을 한 이후 다시 해당 아이템을 모아서 새로운 배열로 생성

// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => {
//   console.log(item, index);
// });

// console.log(newArr);

// // CB2 JS에서 자주 만날 콜백함수 3번 예제
// setTimeout(function () {
//   console.log("click");
// }, 300);

// this 객체
// "일반적으로" 현재 실행되고 있는 함수의 주체

// window에 탑재된 시간 내장 함수에서 this를 사용하면, 무조건 window

// 일반적인 콜백함수 내에서 주체가 되고 있는 아이템을 찾아오고 싶을 때에는 직접 해당 인자를 언급하거나 경우에 따라서 this 객체를 사용한다.

// CB4 JS에서 자주 만날 콜백함수 4번 예제
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((item) => {
//   console.log(this);
// });

// CB5 JS에서 자주 만날 콜백함수 5번 예제
// this => 함수 형태 종류에 따라서 지칭하는 대상 달라짐.
// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

// CB6 JS에서 자주 만날 콜백함수 6번 예제
// 객체 안에 있는 메서드 함수의 경우, this는 function의 경우, 해당 메서드 함수의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면 window 객체를 찾아온다.
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();

// 객체 안에 매서드 형식으로 정의한 함수는 외부에 별도 존재하는 함수의 콜백 함수로 사용할 시, 기존 객체와의 관계성이 제거
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// 객체를 통해서 탄생된 매서드 함수를 콜백함수로 사용 시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// setTimeout(callback, 1000);

// 위 코드보다 효율적으로 this 객체를 사용하는 방법.
// setTimeout(
//   (name) => {
//     let coffeList = name;
//     console.log(coffeList);
//     setTimeout(
//       () => {
//         coffeeList += `, ${name}`;
//         console.log(coffeList);
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );
