const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      showPosition,
      errorPosition,
      options
    );
  else alert("Geolocation을 지원하지 않습니다.");
});
