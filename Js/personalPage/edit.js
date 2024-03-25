document.addEventListener("DOMContentLoaded", function () {
  // 수정하기 버튼 클릭 이벤트
  document
    .getElementById("editProfileBtn")
    .addEventListener("click", function () {
      document.getElementById("editForm").style.display = "block"; // 에딧폼을 표시
      document.getElementById("profile-info").style.display = "none"; // 프로필 정보를 숨김
    });

  // 저장하기 버튼 클릭 이벤트
  document
    .getElementById("saveProfileBtn")
    .addEventListener("click", function () {
      document.getElementById("editForm").style.display = "none"; // 에딧폼을 숨김
      document.getElementById("profile-info").style.display = "block"; // 프로필 정보를 다시 표시

      // 여기에 프로필 정보를 저장하는 코드를 추가하세요.
      // 예: Firebase에 데이터 저장 등

      // 저장 후에 페이지를 새로고침하거나, 사용자에게 알림을 표시할 수 있습니다.
      // 예: alert("프로필이 저장되었습니다.");
    });
});
