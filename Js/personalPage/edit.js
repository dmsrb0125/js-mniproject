document
  .getElementById("editProfileBtn")
  .addEventListener("click", function () {
    document.getElementById("editForm").style.display = "block"; // 폼 표시
    document.getElementById("infoDisplay").style.display = "none"; // 정보 숨기기
  });

document
  .getElementById("saveProfileBtn")
  .addEventListener("click", function () {
    // 입력 받은 데이터로 업데이트 로직 구현
    // 예를 들어, Firebase에 저장하는 코드를 추가

    // 정보를 업데이트한 후
    document.getElementById("editForm").style.display = "none"; // 폼 숨기기
    document.getElementById("infoDisplay").style.display = "block"; // 정보 표시
    // 여기에서 각 span 태그의 내용도 업데이트 해야 합니다.
  });
