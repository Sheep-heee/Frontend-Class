// 현재 보고있는 웹 브라우저 문서 내 버튼을 하나
// 해당 버튼을 클릭할 때마다 배경 색상이 변경되도록 해주세요.
// 변경되어야 하는 색상은 white, yellow, aqua, purple색상
// 마지막 purple 색상 다음번 색상은 white로 무한반복

// 함수
// 각각의 컬러를 배열 자료구조를 사용

const color = ["white", "yellow", "aqua", "purple"];
const button = document.querySelector("button");

let i = 0;
button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
