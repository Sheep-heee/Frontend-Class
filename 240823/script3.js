const likePizza = true;

// producing code = 제작코드 영역
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다.");
  else reject("피자를 주문하지 않습니다.");
});

// consuming code = 실행코드 영역
pizza.then((result) => console.log(result)).catch((err) => console.log(err));
