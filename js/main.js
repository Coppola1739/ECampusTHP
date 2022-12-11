// Javascript for countdown timer. Gets current time and future date,
// calculates days, hours, minutes, and seconds and dynamically updates
// this in the html
const countDownDate = new Date("July 24, 2023 00:00:00").getTime();
const x = setInterval(function() {


  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysTicker").innerHTML = days;
  document.getElementById("hoursTicker").innerHTML = hours;
  document.getElementById("minutesTicker").innerHTML = minutes;
  document.getElementById("secondsTicker").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Javascript for the hamburger icon and mobile-nav menu. Sets an open token for
// the toggle button and updates the display css styles for the appropriate html tags
function hamburger() {
  const menuIcon = document.querySelector(".menu-icon");
  const headerContent = document.querySelector(".header-content");
  const menuLinks = document.querySelector("#menu-links");

  menuIcon.classList.toggle("open");
  if (menuIcon.classList.contains("open")) {
    headerContent.style.display = "none";
    document.querySelector(".mobile-nav").style.display = "block";
    menuLinks.style.display = "flex";

  } else {
    headerContent.style.display = "flex";
    menuLinks.style.display = "none";
    document.querySelector(".mobile-nav").style.display = "block";
  }
}

