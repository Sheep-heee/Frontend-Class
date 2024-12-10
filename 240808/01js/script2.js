const userAnswer = prompt("우리 공부한지", "2024-06-14");
const accent = document.querySelector(".accent");

const now = new Date();
const firstDay = new Date(userAnswer);
const toNow = now.getTime();
const toFirst = firstDay.getTime();

const passedTime = toNow - toFirst;
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `${passedDate}일`;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// Function
const calcDate = (days) => {
  future = toFirst + days * (24 * 60 * 60 * 1000);
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  date = someday.getDate();
  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
};
