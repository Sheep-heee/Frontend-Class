// 사용자로부터 이름과 나이를 전달받으세요.
// 반드시 콜백함수를 활용하기
// 알림창으로 "안녕하세요, 00님 나이가 00세 이네요!"

// function showData(name, age) {
//   alert(`안녕하세요. ${name}님. 나이가 ${age}세 이네요!`);
// }

// function getData(callback) {
//   const userName = prompt("이름을 입력해주세요.");
//   const userAge = Number(prompt("나이를 입력해주세요."));
//   callback(userName, userAge);
// }

// getData(showData);

// function hello() {
//   return "안녕하세요!";
// }

// function bye() {
//   return "안녕히 가세요!";
// }

// function userCheck(name, fn) {
//   console.log(`${name}님`, fn());
// }

// userCheck("홍길동", hello);
// userCheck("영심이", bye);

const init = () => {
  return (a, b) => {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`${init()(30, 20)}`);
