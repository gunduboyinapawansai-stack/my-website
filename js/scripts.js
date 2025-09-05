// Persistent dark mode
if (localStorage.getItem("dark-mode") === "on") {
  document.body.classList.add("dark-mode");
}

const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");

lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "off");
});

darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "on");
});
