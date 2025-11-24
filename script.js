const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    const logo = document.querySelector("#logo img");

    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark"); //add this
      // Change logo to white version in dark mode
      if (logo) {
        logo.src = "./bayan-white.png";
        // Add error handling
        logo.onerror = function () {
          console.log("Failed to load bayan-white.png");
        };
      }
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light"); //add this
      // Change logo back to original in light mode
      if (logo) {
        logo.src = "./bayan.png";
        // Add error handling
        logo.onerror = function () {
          console.log("Failed to load bayan.png");
        };
      }
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", switchTheme, false);
  }

  //  Store color theme for future visits

  // Save user preference on load

  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    const logo = document.querySelector("#logo img");

    if (logo) {
      if (currentTheme === "dark") {
        if (toggleSwitch) {
          toggleSwitch.checked = true;
        }
        // Set white logo for dark mode
        logo.src = "./bayan-white.png";
        logo.onerror = function () {
          console.log("Failed to load bayan-white.png on init");
        };
      } else {
        // Set original logo for light mode
        logo.src = "./bayan.png";
        logo.onerror = function () {
          console.log("Failed to load bayan.png on init");
        };
      }
    }
  }
});

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;
