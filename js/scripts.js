ddocument.addEventListener("DOMContentLoaded", function() {
  // Remove any existing button first
  const existingButton = document.getElementById("dark-mode-toggle");
  if (existingButton) existingButton.remove();

  // Create a single toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.id = "dark-mode-toggle";
  document.body.insertBefore(toggleButton, document.body.firstChild);

  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});