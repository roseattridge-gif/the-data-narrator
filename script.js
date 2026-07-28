const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
}

const enhancementStyles = document.createElement("link");
enhancementStyles.rel = "stylesheet";
enhancementStyles.href = "enhancements.css";
document.head.appendChild(enhancementStyles);

const canvasCard = document.querySelector("#method .section-heading");
if (canvasCard) {
  const panel = document.createElement("aside");
  panel.className = "conversion-panel";
  panel.innerHTML = `
    <strong>Use The Data Narrator Canvas now.</strong>
    <p>Put the audience, signal, stakes, story and ask on one practical page before you build the deck.</p>
    <div class="conversion-links">
      <a href="canvas.html">Open the printable Canvas</a>
      <a href="workshops.html">Bring the method into your team</a>
    </div>`;
  canvasCard.appendChild(panel);
}

const workSection = document.querySelector("#work .section-heading");
if (workSection) {
  const link = document.createElement("div");
  link.className = "conversion-links";
  link.innerHTML = `<a href="workshops.html">See workshop, briefing and advisory formats</a>`;
  workSection.appendChild(link);
}

const updatesCopy = document.querySelector("#updates .updates-copy");
if (updatesCopy) {
  const value = document.createElement("aside");
  value.className = "conversion-panel";
  value.innerHTML = `
    <strong>Do not just wait for launch news.</strong>
    <p>Start with the one-page Canvas, then join the list for practical notes, early excerpts and publication updates.</p>
    <div class="conversion-links"><a href="canvas.html">Get the Canvas</a></div>`;
  updatesCopy.appendChild(value);
}
