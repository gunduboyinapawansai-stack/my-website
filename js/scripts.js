// Simple JavaScript example

// When the page loads, show a welcome message in the console
console.log("Welcome to My Website!");

// Example: toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.id = "dark-mode-toggle";
  document.body.insertBefore(toggleButton, document.body.firstChild);

  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
