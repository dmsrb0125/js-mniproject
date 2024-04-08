document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const dDay = new Date("2024-08-22");

  // 시간 무시
  today.setHours(0, 0, 0, 0);
  dDay.setHours(0, 0, 0, 0);

  const timeDifference = dDay - today;
  const oneDay = 24 * 60 * 60 * 1000;

  const daysLeft = Math.floor(timeDifference / oneDay) + 1;
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = `${daysLeft}일`;

  // 강조 색상 적용
  countdownElement.classList.add("highlight");
});
