document.addEventListener("DOMContentLoaded", function () {
  var cookiePopup = document.getElementById("cookie-popup");
  var acceptButton = document.getElementById("accept-cookies");

  // Check if cookies are accepted
  if (!document.cookie.includes("cookies_accepted=true")) {
    cookiePopup.style.display = "block";
  } else {
    cookiePopup.style.display = "none";
  }

  acceptButton.addEventListener("click", function () {
    // Set cookie
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000";
    cookiePopup.style.display = "none";
  });
});
