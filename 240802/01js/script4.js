// const orderName = document.querySelector("#ordername").value;
// console.log(orderName);

// const button = document.querySelector("input[type='submit']");

// button.addEventListener("submit", (e) => {
//   e.preventDefault();
// const orderName = document.querySelector("#ordername");
//   const orderName = document.order.ordername;
//   console.log(orderName.value);
// });

// console.log(document.forms[0].elements[4]);

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

select.addEventListener("change", function () {
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다! 가격은 5,000원 입니다!`);
});
