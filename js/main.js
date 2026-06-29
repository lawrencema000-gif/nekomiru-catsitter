/* ねこみるキャットシッター — interactions */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const i18n = window.NekomiruI18n;

    /* ---- Language toggle ---- */
    const langToggle = document.getElementById("langToggle");
    if (langToggle && i18n) {
      langToggle.addEventListener("click", function () {
        const current = document.documentElement.lang === "en" ? "en" : "ja";
        i18n.apply(current === "ja" ? "en" : "ja");
      });
    }

    /* ---- Mobile menu (with focus management so hidden links aren't tabbable) ---- */
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    const navMq = window.matchMedia("(max-width: 980px)");

    function syncNavState() {
      if (!nav) return;
      const hiddenDrawer = navMq.matches && !nav.classList.contains("open");
      if (hiddenDrawer) {
        nav.setAttribute("inert", "");
        nav.setAttribute("aria-hidden", "true");
      } else {
        nav.removeAttribute("inert");
        nav.removeAttribute("aria-hidden");
      }
    }
    function closeMenu(returnFocus) {
      if (!nav) return;
      nav.classList.remove("open");
      menuBtn && menuBtn.setAttribute("aria-expanded", "false");
      syncNavState();
      if (returnFocus && menuBtn) menuBtn.focus();
    }
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        syncNavState();
        if (open) {
          const first = nav.querySelector("a");
          first && first.focus();
        }
      });
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", function () { closeMenu(false); })
      );
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("open")) closeMenu(true);
      });
      navMq.addEventListener("change", syncNavState);
      syncNavState();
    }

    /* ---- Scroll reveal ---- */
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    /* ---- Footer year ---- */
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /* ---- Netlify form: AJAX submit with status, graceful fallback ---- */
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    function msg(key) {
      const lang = document.documentElement.lang === "en" ? "en" : "ja";
      return i18n && i18n.dict[key] ? i18n.dict[key][lang] : "";
    }
    if (form && status) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        status.className = "form-status";
        status.textContent = msg("formSending");

        const data = new URLSearchParams(new FormData(form)).toString();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: data,
        })
          .then((res) => {
            if (!res.ok) throw new Error("bad status");
            form.reset();
            status.className = "form-status ok";
            status.textContent = msg("formOk");
          })
          .catch(() => {
            status.className = "form-status err";
            status.textContent = msg("formErr");
          });
      });
    }
  });
})();
