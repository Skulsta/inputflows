import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="bg-white py-4 text-gray-700 sticky top-0 z-20 shadow">
      <Link to="/" className="flex max-w-screen-xl px-4 mx-auto">
        <h3 className="text-3xl cursive text-gray-700 transition duration-500 hover:text-green-800">
          Inputflows
        </h3>
      </Link>
    </nav>
  );
}
