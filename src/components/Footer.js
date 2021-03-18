import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col mx-4 text-white font-thin leading-loose">
          <h5 className="text-xl font-normal mb-2">Links</h5>
          <div>
            <Link to="/" className="hover:text-blue">
              Home
            </Link>
          </div>
          <div>
            <Link to="/posts" className="hover:text-blue">
              Posts
            </Link>
          </div>
          <div>
            <Link to="/brreg" className="hover:text-blue">
              Search
            </Link>
          </div>
          <div>
            <Link to="/memory" className="hover:text-blue">
              Memory
            </Link>
          </div>
          <div>
            <a
              className="hover:text-blue"
              href="https://github.com/Skulsta/inputflows"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
