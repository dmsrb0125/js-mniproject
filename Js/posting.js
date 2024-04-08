$("#addMemberbtn").click(function () {
  if ($(".mypostingbox").css("display") === "none") {
    $(".mypostingbox").css("display", "flex");
  } else {
    $(".mypostingbox").css("display", "none");
  }
});
