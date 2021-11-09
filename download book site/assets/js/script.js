$(document).ready(function () {
  $(".resetDownloadCount").click(function (e) {
    if (typeof Storage !== "undefined") {
      localStorage.clickcount = 0;
    }
  });

  $(".downloadBtn").click(function (e) {
    downloadCount();
  });

  if (typeof Storage !== "undefined") {
    $(".downloadCountDisplay").text(localStorage.clickcount);
  }
  function downloadCount() {
    if (typeof Storage !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      console.log(localStorage.clickcount + " downloads");
      $(".downloadCountDisplay").text(localStorage.clickcount);
    } else {
      console.log("Sorry, your browser does not support web storage...");
    }
  }
});
