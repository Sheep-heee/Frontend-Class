// const today = new Date();
// const month = today.getMonth() + 1;
// const date = today.getDate();
// const day = today.getDay();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${month}월`);
// document.write(`<br/>`);
// document.write(`현재 일 : ${date}일`);

const today = new Date();
const year = today.getFullYear();
const lastDate = new Date(year, 11, 31);
const diffDate = lastDate - today;

const result = Math.round(diffDate / (24 * 60 * 60 * 1000));
alert(`올 연말 마지막 날까지 ${result}일 남았습니다.`);