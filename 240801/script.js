// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log();
// }

// const calcSum = function() {

// }

// const num = Number(prompt("숫자를 입력하세요."));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1;
//   }
//   return sum;
// }

// alert(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다!`);

document.body.innerHTML += `<button id="btn">Click!</button>`;

const button = document.querySelector("#btn");

function display() {
  alert("클릭했습니다!");
}
button.addEventListener("click", display);
