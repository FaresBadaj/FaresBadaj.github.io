(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");

  root.classList.add("js");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch (err) {
        /* storage unavailable — theme still applies for this session */
      }
    });
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var revealItems = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(revealItems, function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var item = entry.target;
        var siblings = item.parentElement ? item.parentElement.querySelectorAll(".reveal") : [];
        var index = Array.prototype.indexOf.call(siblings, item);
        item.style.transitionDelay = Math.min(index, 5) * 70 + "ms";
        item.classList.add("is-visible");
        observer.unobserve(item);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  Array.prototype.forEach.call(revealItems, function (item) {
    observer.observe(item);
  });
})();
