import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-12">
      <div className="max-w-screen-xl mx-auto flex space-x-16 px-8">
        <div className="flex flex-col mx-4 text-white font-thin leading-loose">
          <h5 className="text-xl font-normal mb-2">Links</h5>
          <div>
            <Link to="/" className="hover:text-green">
              Home
            </Link>
          </div>
          <div>
            <Link to="/posts" className="hover:text-green">
              Posts
            </Link>
          </div>
          <div>
            <a
              className="hover:text-green"
              href="https://github.com/Skulsta/inputflows"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex flex-col mx-4 text-white font-thin leading-loose">
          <h5 className="text-xl font-normal mb-2">Apps</h5>
          <div>
            <Link to="/brreg" className="hover:text-green">
              Search
            </Link>
          </div>
          <div>
            <Link to="/memory" className="hover:text-green">
              Memory
            </Link>
          </div>
          <div>
            <a
              className="hover:text-green"
              href="https://skulsta.github.io/reisefradrag/"
              target="_blank"
              rel="noreferrer"
            >
              Travel Tax
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
