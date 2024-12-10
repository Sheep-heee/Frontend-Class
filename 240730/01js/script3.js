// 사용자로부터 3개의 값을 받기
// 교통비, 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면 "예산관리 잘해주세요."
// 위 3개의 값이 10,000원 이하이라면 "예산관리 잘하셨어요!"

// const traffic = parseInt(prompt("교통비를 입력해주세요.", "ex. 5000"));
// const meal = parseInt(prompt("식대를 입력해주세요.", "ex. 5000"));
// const drink = parseInt(prompt("음료비를 입력해주세요.", "ex. 5000"));

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력!"));
  arr.push(userNum);
}

const [traffic, meal, drink] = arr;
const sum = traffic + meal + drink;

const budget = traffic + meal + drink;
let result = budget <= 10000;

result = result ? "예산관리 잘하셨어요!" : "예산관리 잘해주세요.";

alert(`총 사용금액은 ${budget}원입니다. ${result}`);
