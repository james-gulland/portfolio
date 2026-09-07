export const DAY = "day";
export const NIGHT = "night";

// The inline script in index.html sets data-theme before first paint, so the
// attribute — not localStorage — is the source of truth once the app is running.
export const getCurrentTheme = () =>
  document.documentElement.dataset.theme === NIGHT ? NIGHT : DAY;

export const applyTheme = theme => {
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // private browsing, storage full — the theme still applies for this visit
  }
};
