const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=0pCkq8LmOyVDAWwkwfz49G6ju5PhYx9RjkNJLFoIVtCHmEIwoykbG3N57CGaq9URkSFeJeb0a9IVQg89aa4Rhg%3D%3D_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      console.log(data);
      const { latitude, longitude } = position.coords;
      const mapContainer = document.querySelector("#map");
      const mapOptions = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOptions);

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

        markers.push(marker);

        const infowindow = new kakao.maps.Infowindow({
          content: data[i].tacltNm,
        });

        const makeOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };

        const makeOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }
      clusterer.addMarkers(markers);
    });
};

const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
