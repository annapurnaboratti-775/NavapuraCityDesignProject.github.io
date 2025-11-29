// Smooth scroll for the hero button
document.querySelector(".hero-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#team").scrollIntoView({ behavior: "smooth" });
});

