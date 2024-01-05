import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [theme, setTheme] = useDarkSide();
  const darkSide = theme === "dark";

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
      {}
    </>
  );
}
