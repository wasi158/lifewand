// Modal open/close
const openBtn = document.getElementById("openRegister");
const modal = document.getElementById("registerModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", (e) => {
  e.preventDefault(); // stop link navigation
  modal.style.display = "flex"; // show modal
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close if user clicks outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
