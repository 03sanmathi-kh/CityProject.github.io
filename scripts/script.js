function toggleTheme() {
  document.body.classList.toggle("light");
  const btn = document.getElementById("toggleBtn");
  btn.textContent = document.body.classList.contains("light")
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
}

