const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".section, .project-card, .skill-card, .timeline-item, .cert-card, .education-card").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.style.borderBottomColor = window.scrollY > 30 ? "rgba(255,255,255,.08)" : "transparent";
});
