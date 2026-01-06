// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
document.querySelectorAll(".nav__link").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Project filtering
const chips = document.querySelectorAll(".chip");
const projects = document.querySelectorAll(".project");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;

    projects.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      const show = filter === "all" || tags.includes(filter);
      card.classList.toggle("hide", !show);
    });
  });
});

// Theme toggle with persistence
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "" : "light";
  if (next) document.documentElement.setAttribute("data-theme", next);
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem("theme", next);
});

// Demo contact form (no backend) — shows a message only
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(contactForm).get("name");
  formNote.textContent = `Thanks, ${name}! This form is a demo (no backend yet).`;
  contactForm.reset();
});

// Availability indicator (example)
const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");
const available = true;

statusText.textContent = available ? "Available for work" : "Not available right now";
statusDot.style.background = available ? "var(--accent2)" : "#f59e0b";
