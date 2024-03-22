var targetDate = new Date("Augus 22, 2024");

var currentDate = new Date();

// 목표 날짜와 현재 날짜 사이의 차이(밀리초)를 계산
var difference = targetDate - currentDate;

// 밀리초를 일(day) 단위로 변환
var days = Math.ceil(difference / (1000 * 60 * 60 * 24));

// D-Day 표시 업데이트
document.getElementById("days").innerText = "D - " + days;
document.getElementById("days").style.color = "skyblue";
