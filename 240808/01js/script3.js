const userQuestion = prompt("만보 걷기를 시작한 날짜는?", "2024-08-08");
const result = document.querySelector("#result");

const today = new Date();
const firstDay = new Date(userQuestion);

const passedTime = today.getTime() - firstDay.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDate;
