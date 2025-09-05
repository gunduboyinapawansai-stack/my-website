document.addEventListener("DOMContentLoaded", function() {
  // Remove existing button if any
  const existingButton = document.getElementById("dark-mode-toggle");
  if (existingButton) existingButton.remove();

  // Create toggle button
  const toggleButton = document.createElement("button");
  toggleButton.id = "dark-mode-toggle";

  // Check saved mode in localStorage
  const savedMode = localStorage.getItem("dark-mode");
  if (savedMode === "on") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // Set initial icon based on current mode
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

  document.body.appendChild(toggleButton);

  // Click event to toggle mode
  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleButton.textContent = isDark ? "☀️" : "🌙";
    // Save current mode
    localStorage.setItem("dark-mode", isDark ? "on" : "off");
  });
});
