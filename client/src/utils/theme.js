export const DAY = "day";
export const NIGHT = "night";

const isTheme = value => value === DAY || value === NIGHT;

const getStoredTheme = () => {
  try {
    const stored = window.localStorage.getItem("theme");
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
};

const getSystemTheme = () => {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? NIGHT : DAY;
  } catch {
    return DAY;
  }
};

// public/theme-init.js sets data-theme before first paint, so the attribute is
// the source of truth once the app is running. Stored preference wins over the
// OS; prefers-color-scheme is only the default when nothing is stored.
export const getCurrentTheme = () => {
  const fromDom = document.documentElement.dataset.theme;
  if (isTheme(fromDom)) return fromDom;
  return getStoredTheme() ?? getSystemTheme();
};

export const applyTheme = theme => {
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // private browsing, storage full — the theme still applies for this visit
  }
};
