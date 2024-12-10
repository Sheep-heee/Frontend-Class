let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));
// localStorage.setItem("students", students);

let localData;

if (localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"));

localData.push("Choi");
localStorage.setItem("students", JSON.stringify(students));

console.log(localData);
