import React from "react";
import { Link } from "react-router-dom";
import Sun from "../assets/icons/sun.png";
import Moon from "../assets/icons/moon.png";

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
    <div className="bg-white dark:bg-black ">
      <nav className="py-4 px-4 mx-auto flex max-w-screen-xl justify-between text-gray-700 sticky top-0 z-20 border-b border-gray-100">
        <Link to="/" className="">
          <h3 className="text-3xl cursive text-gray dark:text-gray-300 transition duration-500 hover:text-green-800 dark:hover:text-green-800">
            Inputflows
          </h3>
        </Link>
        <button onClick={toggleDarkMode} className="px-4">
          {localStorage.theme === "dark" ? (
            <img src={Moon} />
          ) : (
            <img src={Sun} />
          )}
        </button>
      </nav>
    </div>
  );
}
