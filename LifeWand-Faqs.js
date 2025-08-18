const headers = document.querySelectorAll(".accordion-header");

// ✅ On page load: reset all accordions
document.querySelectorAll(".accordion-body").forEach(body => {
  body.style.maxHeight = null;
  body.classList.remove("active");
  const icon = body.previousElementSibling.querySelector(".icon");
  if (icon) icon.textContent = "+";  // make sure every icon shows +
});

headers.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector(".icon");

    // Close other open items
    document.querySelectorAll(".accordion-body").forEach(item => {
      if (item !== body) {
        item.style.maxHeight = null;
        item.classList.remove("active");
        item.previousElementSibling.querySelector(".icon").textContent = "+";
      }
    });

    // Toggle current
    if (body.classList.contains("active")) {
      body.style.maxHeight = null;
      body.classList.remove("active");
      icon.textContent = "+";
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
      body.classList.add("active");
      icon.textContent = "-";
    }
  });
});
