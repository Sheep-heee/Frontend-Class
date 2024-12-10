const button = document.querySelector("input[type='button']");
const showSales = () => {
  const price = document.querySelector("#price").value;
  const sale = document.querySelector("#sale").value;

  const savedPrice = price * (sale / 100);
  const resultPrice = price - savedPrice;

  document.querySelector(
    ".bottomInfo p"
  ).innerText = `상품의 원래 가격은 ${price}원이고, 할인률은 ${sale}%입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;
};

button.addEventListener("click", showSales);
