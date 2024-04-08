let url = "http://spartacodingclub.shop/sparta_api/weather/seoul";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let temp = data["temp"];
    $("#temp").text(temp + "도");

    // 온도에 따른 색상 변경
    if (temp > 10) {
      $("#temp").css("color", "#fbc4ab "); // 따뜻할 때 색상
    } else {
      $("#temp").css("color", "blue"); // 추울 때 색상
    }
  })

  .catch((error) => console.log("Error:", error));
