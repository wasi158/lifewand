const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  // Toggle the navigation menu
  navLinks.classList.toggle("show");

  // Toggle the icon between hamburger and cross
  if (navLinks.classList.contains("show")) {
    toggleBtn.innerHTML = "✕"; // Cross icon
    toggleBtn.classList.add("active");
  } else {
    toggleBtn.innerHTML = "☰"; // Hamburger icon
    toggleBtn.classList.remove("active");
  }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("show");
    toggleBtn.innerHTML = "☰"; // Reset to hamburger icon
    toggleBtn.classList.remove("active");
  }
});

// Close menu when window is resized to desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show");
    toggleBtn.innerHTML = "☰"; // Reset to hamburger icon
    toggleBtn.classList.remove("active");
  }
});