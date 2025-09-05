const modeToggle = document.getElementById("mode-toggle");

// Load dark mode from localStorage
if (localStorage.getItem("dark-mode") === "on") {
  document.body.classList.add("dark-mode");
  modeToggle.textContent = "☀️";
} else {
  modeToggle.textContent = "🌙";
}

// Toggle dark mode on click
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "on");
    modeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("dark-mode", "off");
    modeToggle.textContent = "🌙";
  }
});
