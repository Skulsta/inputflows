import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black py-12 dark:border-t">
      <div className="max-w-screen-xl mx-auto flex space-x-16 px-8">
        <div className="flex flex-col mx-4 text-white font-thin leading-loose">
          <h5 className="text-xl font-normal mb-4">Links</h5>
          <div className="grid grid-cols-2 gap-4">
          <div>
            <Link to="/" className="hover:text-green">
              Home
            </Link>
          </div>
          <div>
            <Link to="/apps" className="hover:text-green">
              Apps
            </Link>
          </div>
          <div>
            <a
              className="hover:text-green"
              href="https://twitter.com/Skulsta"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
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
        </div>
        <div className="flex flex-col mx-4 text-white font-thin leading-loose">
          <h5 className="text-xl font-normal mb-4">Apps</h5>
          <div className="grid grid-cols-3 gap-4">
          <div>
            <a
              className="hover:text-green"
              href="https://svipe.no"
              target="_blank"
              rel="noreferrer"
            >
              Svipe
            </a>
          </div>
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
              Travel
            </a>
          </div>
          <div>
            <a
              className="hover:text-green"
              href="https://hogwartslegacy.io"
              target="_blank"
              rel="noreferrer"
            >
              Hogwarts
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
