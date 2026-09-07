import { useState } from "react";
import DaybreakSwitch from "./daybreak-switch";
import { applyTheme, getCurrentTheme, DAY, NIGHT } from "../../utils/theme";

const ThemeToggle = () => {
  const [isNight, setIsNight] = useState(() => getCurrentTheme() === NIGHT);

  const handleChange = night => {
    setIsNight(night);
    applyTheme(night ? NIGHT : DAY);
  };

  return (
    <div id="theme-toggle">
      <DaybreakSwitch
        checked={isNight}
        onChange={handleChange}
        size={40}
        aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
      />
    </div>
  );
};

export default ThemeToggle;
