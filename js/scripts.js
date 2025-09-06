// DARK/LIGHT MODE TOGGLE
const modeToggle = document.getElementById("mode-toggle");

// Initialize dark mode from localStorage
if (localStorage.getItem("dark-mode") === "on") {
  document.body.classList.add("dark-mode");
  modeToggle.textContent = "☀️"; // Show sun in dark mode
} else {
  modeToggle.textContent = "🌙"; // Show moon in light mode
}

// Toggle dark mode
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "☀️";
    localStorage.setItem("dark-mode", "on");
  } else {
    modeToggle.textContent = "🌙";
    localStorage.setItem("dark-mode", "off");
  }
});

// LANGUAGE TOGGLE
const langToggle = document.getElementById("lang-toggle");

// Initialize language
if (localStorage.getItem("language") === "te") {
  setLanguage("te");
  langToggle.textContent = "అ"; // Telugu
} else {
  setLanguage("en");
  langToggle.textContent = "E"; // English
}

// Toggle language
langToggle.addEventListener("click", () => {
  if (localStorage.getItem("language") === "en") {
    setLanguage("te");
    langToggle.textContent = "E";
  } else {
    setLanguage("en");
    langToggle.textContent = "అ";
  }
});

// Function to change text
function setLanguage(lang) {
  if (lang === "en") {
    document.querySelector(".hero-title").textContent = "Welcome to My Website";
    document.querySelector(".hero-text").textContent = "Experience a modern website .";
    document.querySelector(".nav-home").textContent = "Home";
    document.querySelector(".nav-about").textContent = "About";
    document.querySelector(".nav-contact").textContent = "Contact";
    document.querySelector(".footer-text").textContent = "© 2025 My Website";
    localStorage.setItem("language", "en");
  } else if (lang === "te") {
    document.querySelector(".hero-title").textContent = "నా వెబ్‌సైట్ కు స్వాగతం";
    document.querySelector(".hero-text").textContent = "  ఆధునిక వెబ్‌సైట్ ను అనుభవించండి.";
    document.querySelector(".nav-home").textContent = "హోం";
    document.querySelector(".nav-about").textContent = "గురించి";
    document.querySelector(".nav-contact").textContent = "సంప్రదించండి";
    document.querySelector(".footer-text").textContent = "© 2025 నా వెబ్‌సైట్";
    localStorage.setItem("language", "te");
  }
}
