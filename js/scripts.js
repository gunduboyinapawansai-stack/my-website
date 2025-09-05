document.addEventListener("DOMContentLoaded", function() {
  // Remove existing button if any
  const existingButton = document.getElementById("dark-mode-toggle");
  if (existingButton) existingButton.remove();

  // Create dark mode toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.id = "dark-mode-toggle";
  document.body.appendChild(toggleButton); // append to body

  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
