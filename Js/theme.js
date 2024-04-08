function changeTheme(theme) {
  document.body.dataset.theme = theme; // 테마 변경
  localStorage.setItem("theme", theme); // 변경된 테마를 로컬 스토리지에 저장

  updateButtonDisplay(); // 버튼의 표시 상태 업데이트
}

function updateButtonDisplay() {
  const theme = document.body.dataset.theme;
  const lightBtn = document.querySelector(".theme-btn.light");
  const darkBtn = document.querySelector(".theme-btn.dark");

  lightBtn.style.visibility = theme === "dark" ? "visible" : "hidden";
  darkBtn.style.visibility = theme === "light" ? "visible" : "hidden";
}

document.addEventListener("DOMContentLoaded", () => {
  // 초기 테마 설정 확인 및 적용
  const currentTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = currentTheme;

  updateButtonDisplay(); // 버튼 초기 표시 상태 설정

  // 테마 버튼 클릭 이벤트 리스너
  document
    .querySelector(".theme-btn.light")
    .addEventListener("click", () => changeTheme("light"));
  document
    .querySelector(".theme-btn.dark")
    .addEventListener("click", () => changeTheme("dark"));
});
