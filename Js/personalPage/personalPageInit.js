// URL에서 쿼리 스트링 값을 가져오는 함수
function getQueryStringValue(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// 문서가 준비되면 실행
document.addEventListener("DOMContentLoaded", function () {
  // 'memberId'의 값을 가져옵니다.
  var memberId = getQueryStringValue("memberId");

  // 'memberId' 값을 HTML 요소에 렌더링합니다.
  document.getElementById("memberIdDisplay").textContent = memberId;
});
