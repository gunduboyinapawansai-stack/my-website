document.addEventListener("DOMContentLoaded", function() {
  // Remove any existing button
  const existingButton = document.getElementById("dark-mode-toggle");
  if (existingButton) existingButton.remove();

  // Create the button
  const toggleButton = document.createElement("button");
  toggleButton.id = "dark-mode-toggle";
  toggleButton.textContent = "Toggle Dark Mode";
  document.body.appendChild(toggleButton);

  // Add click event
  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
