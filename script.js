const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const signupForm = document.querySelector("[data-signup-form]");
const formNote = document.querySelector("[data-form-note]");

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

if (signupForm && formNote) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(signupForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!email) {
      formNote.textContent = "Add your email address first.";
      return;
    }

    const subject = encodeURIComponent("The Data Narrator launch list");
    const body = encodeURIComponent(
      `Please add me to The Data Narrator launch list.\n\nName: ${name || "Not provided"}\nEmail: ${email}`
    );

    window.location.href = `mailto:CHANGE-ME@example.com?subject=${subject}&body=${body}`;
    formNote.textContent = "Your email app should open with a draft ready to send.";
  });
}
