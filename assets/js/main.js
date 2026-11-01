// ===== Configuração =====
// Número de WhatsApp da clínica, só dígitos, com indicativo (351 = Portugal)
const WHATSAPP = "351000000000";

// Menu móvel
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Sombra no cabeçalho ao fazer scroll
const topbar = document.querySelector(".topbar");
const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Formulário → WhatsApp
const form = document.getElementById("form-marcacao");
const error = form.querySelector(".form__error");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const nome = (d.get("nome") || "").trim();
  const tel = (d.get("telefone") || "").trim();
  const esp = d.get("especialidade");
  const msg = (d.get("mensagem") || "").trim();

  let problem = "";
  if (!nome) problem = "Indique o seu nome.";
  else if (tel.replace(/\D/g, "").length < 9) problem = "Indique um telefone válido.";
  else if (!esp) problem = "Escolha uma especialidade.";
  else if (!d.get("consentimento")) problem = "É necessário autorizar o tratamento dos dados.";

  if (problem) {
    error.textContent = problem;
    error.hidden = false;
    return;
  }
  error.hidden = true;

  const texto =
    `Olá! Gostaria de marcar uma consulta.\n\n` +
    `Nome: ${nome}\nTelefone: ${tel}\nEspecialidade: ${esp}` +
    (msg ? `\nMensagem: ${msg}` : "");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
});

// Animação suave ao entrar no ecrã
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".card, .steps li, .member, .faq details").forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}
