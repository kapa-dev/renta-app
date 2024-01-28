"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.getElementsByTagName("html")[0].classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.getElementsByTagName("html")[0].classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
      setIsDarkMode(true);
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
      setIsDarkMode(false);
    }
  };

  return (
    <label className="w-[40px] h-[40px] text-[#515D65] dark:text-[#FFF] text-xs flex justify-center items-center bg-[#FFF] dark:bg-dark-primary rounded-full border-[1px] border-[#AAA] dark:border-white shadow-lg">
      <input
        type="checkbox"
        className="appearance-none"
        checked={isDarkMode}
        onChange={(e) => toggleDarkMode(e)}
      />
      {isDarkMode ? "Light" : "Dark"}
    </label>
  );
}
