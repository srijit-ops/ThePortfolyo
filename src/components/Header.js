import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function Header({ name }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-white mb-6 lg:px-8 sm:px-5 px-4 py-6 flex justify-between items-center shadow sticky top-0 z-[1000] w-full dark:bg-gray-950">
      <p className="text-gray-950 dark:text-white font-semibold sm:text-3xl text-xl tracking-wider">
        {name}.
      </p>
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="flex justify-center items-center cursor-pointer"
      >
        <i
          className={`fa-solid fa-${
            theme === "light" ? "moon" : "sun"
          } text-gray-950 dark:text-white text-2xl`}
        ></i>
      </div>
    </div>
  );
}

export default Header;
