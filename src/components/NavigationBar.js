import React from "react";
import { Link } from "react-router-dom";
import LightBulb from "../assets/icons/light-bulb.png";

export default function NavigationBar() {
  const toggleDarkMode = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    window.location.reload(false);
  };

  return (
    <div className="bg-white dark:bg-black border-b border-gray-100 dark:border-gray-700">
      <nav className="py-4 px-4 mx-auto flex max-w-screen-xl justify-between text-gray-700 sticky top-0 z-20">
        <Link to="/" className="">
          <h3 className="text-3xl cursive text-gray dark:text-gray-300 transition duration-500 hover:text-gray-800 dark:hover:text-white">
            Home
          </h3>
        </Link>
        <button onClick={toggleDarkMode} className="px-4">
          <img
            className="dark:grayscale dark:hover:grayscale-0 hover:grayscale transform duration-700"
            src={LightBulb}
            alt="toggle dark mode"
          />
        </button>
      </nav>
    </div>
  );
}
