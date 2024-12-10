// 아래 id 및 pw는 A사용자의 id & pw 입니다.
const id = "ezen";
const pw = 1234;

// 사용자로부터 id 및 pw 정보값을 순차적으로 받습니다.
// 사용자가 입력한 id값이 위에 저장된 id와 일치하면, pw값을 받을 수 있는 단계로 넘어가고 만약 id값이 일치하지 않으면 값이 일치하지 않는다.는 알림창을 띄워줍니다.
// 사용자가 입력한 pw값을 단계에서 도착해서도 pw가 일치하면 사용자님 반갑습니다. 라는 알림창, 만약 pw가 일치하지 않는다면 pw값이 일치하지 않습니다. 라는 알림창을 띄워줍니다.

const inputID = prompt("아이디를 입력해주세요.");

if (inputID !== null) {
  if (id === inputID) {
    const inputPW = Number(prompt("비밀번호를 입력해주세요."));
    if (pw === inputPW) {
      alert("사용자님 반갑습니다.");
    } else {
      alert("값이 일치하지 않습니다.");
      location.reload();
    }
  } else {
    alert("값이 일치하지 않습니다.");
    location.reload();
  }
}
