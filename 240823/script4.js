const result = document.querySelector("#result");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee !== null && coffee !== "") {
    result.innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다!");
  }
});

const display = (coffee) => {
  const end = document.querySelector("#end");
  end.innerText = `${coffee} 준비 완료!`;
  end.classList.add("active");
  result.classList.add("done");
};

const showErr = (err) => {
  console.log(err);
};

order.then(display);

console.log(order);
