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
      <nav className="py-2 px-4 mx-auto flex max-w-screen-xl justify-between text-gray-700 sticky top-0">
        <Link to="/">
          <h3 className="text-lg text-gray dark:text-gray-300 transition duration-500 hover:text-gray-800 dark:hover:text-white">
            Home
          </h3>
        </Link>
        <button onClick={toggleDarkMode}>
        <h3 className="text-lg text-gray dark:text-gray-300 transition duration-500 hover:text-gray-800 dark:hover:text-white">
            {localStorage.theme === "dark" ? "Light" : "Dark"}
          </h3>
        </button>
      </nav>
    </div>
  );
}
