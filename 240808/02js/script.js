const userName = document.querySelector("#name");
const userMajor = document.querySelector("#major");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value === "" || userMajor.value === "") {
    alert("정상적인 데이터를 입력하세요!");
  } else {
    const tbody = document.querySelector("tbody");
    const newTr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.innerText = userName.value;
    userName.value = "";

    const majorTd = document.createElement("td");
    majorTd.innerText = userMajor.value;
    userMajor.value = "";

    newTr.appendChild(majorTd);
    newTr.appendChild(nameTd);
    tbody.appendChild(newTr);
  }
});