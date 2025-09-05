document.addEventListener("DOMContentLoaded", function() {
  // Remove existing button if any
  const existingButton = document.getElementById("dark-mode-toggle");
  if (existingButton) existingButton.remove();

  // Create the toggle button
  const toggleButton = document.createElement("button");
  toggleButton.id = "dark-mode-toggle";

  // Set initial icon based on current mode
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

  document.body.appendChild(toggleButton);

  // Add click event
  toggleButton.addEventListener("click", function() {
