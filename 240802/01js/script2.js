// const main = document.querySelector("main");
// const profile = main.getElementById("profile");
// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// const user = desc.querySelectorAll(".user");
// console.log(user);

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

// const desc = document.querySelector("#desc");
// const iu = desc.querySelectorAll(".user")[0];
// console.log(iu);
// console.log(desc.innerText);

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "black";
  this.style.color = "#fff";
});

const pfImg = document.querySelector("#profile img");

pfImg.addEventListener("click", function () {
  this.src = "./img/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");

firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2)");
secondP.addEventListener("click", function () {
  // this.classList.add("active");
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});
