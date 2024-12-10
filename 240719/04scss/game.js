// 끝말잇기 게임

// 1. 제시어의 끝단어 확인
// 1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함.
// 1-2. 3-1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야 함.

// 2. 끝단어로 시작하는 단어를 입력
// 2-1. 사용자가 입력한 단어가 무엇인지를 알아야 함.
// 2-2. 끝단어로 시작하는 단어 == 제시어의 끝단어

// 3. 단어 입력 후 입력 버튼
// 3-1. 입력 버튼이 클릭 => 단어 검증 (*이벤트)

// 4. 문제 여부 판단 => 문제없다/문제있다
// 4-1. 조건에 따라서 값을 어떻게 출력

// 정석이 아닌 방법
// const button = document.querySelector(".search");

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("입력버튼 클릭");
// });

// word game
const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
    document.querySelector("#myword").value = "";
  }
};

// 정석/실무에서 쓰는 방법
const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);

// lotto game
// 1부터 45까지의 6개의 숫자가 중복없이 랜덤으로 동시에 추출이 되어야 함.

// 1. 클릭! 버튼이 무엇인지를 컴퓨터에게 알려줘야 함.
// 2. 클릭! 버튼 클릭 시, 숫자가 생성되어야 함. (*이벤트)
// 3. JS > 내장 객체 > 숫자를 랜덤으로 생성해주는 함수
// 3-1. random() => 0~1미만의 실수 & 난수 생성.
// 3-2. 소수점을 없앨 필요가 있음 (floor() => 소수점 버림 / ceil() => 소수점을 올림 / round() => 소수점을 반올림)
// 4. 중복x
// 4-1. set() 클래스 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정 => 중복된 값이 생성되는 경우, 1개로 합쳐주는 역할
// 4-2. 6개의 숫자 완성 => 2번째, 4번째 숫자, 같은 경우. 조건문 => 재추첨
const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

// const luckyNumber = 6;
// const lottoCount = 44;

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoButton.addEventListener("click", startLotto);
