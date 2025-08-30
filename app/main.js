document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupContactForm();
});

// 🌗 Tema oscuro/claro
function initTheme() {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";

  setTheme(savedTheme);

  toggle.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

function setTheme(theme) {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");

  if (theme === "dark") {
    body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  } else {
    body.classList.remove("dark-mode");
    toggle.textContent = "🌙";
  }
}

// 📩 Formulario
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showAlert("Por favor completa todos los campos.");
    return;
  }

  showAlert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
  event.target.reset();
}

// ✅ Alerta visual
function showAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.className = "custom-alert";
  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 4000);
}

