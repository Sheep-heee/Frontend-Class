// 사용자의 몸무게가 적정체중인지 계산
// 적정체중 = (키 - 100) * 0.9 => 오차범위 5

const name = prompt("이름을 말씀해주세요!", "ex. 홍길동");
const height = parseInt(prompt("키가 어떻게 되시나요?", "ex.182.4"));
const weight = parseInt(prompt("몸무게를 말씀해주세요!", "ex.54.7"));

const normalWeight = (height - 100) * 0.9;
let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

result = result ? "적정 체중입니다!" : "적정 체중이 아닙니다.";

alert(`${name}님은 ${result}`);
