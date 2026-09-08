(function () {
  var theme = "day";
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "night" || stored === "day") {
      theme = stored;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "night";
    }
  } catch (e) {
    try {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "night";
    } catch (e2) {}
  }
  document.documentElement.dataset.theme = theme;
})();
