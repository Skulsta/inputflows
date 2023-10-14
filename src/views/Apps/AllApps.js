import React from "react";
import { Link } from "react-router-dom";
import CompanySearch from "../../assets/images/companySearch.png";
import HogwartsImage from "../../assets/images/hogwarts_safari.png";
import Memory from "../../assets/images/memory.png";
import Reisefradrag from "../../assets/images/reisefradrag.png";
import SvipeImage from "../../assets/images/svipe_safari.png";

export default function AllApps() {
  return (
    <div className="bg-opacity-25">
      <div className="flex max-w-screen-xl mx-auto px-4 justify-center">
        <div>
          <h2 className="text-2xl dark:text-gray-100 mt-8 mb-4 text-gray-800 font-semibold">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mt-4 pb-8">
            <span className="block">
              <img
                className="w-full h-full object-cover"
                src={SvipeImage}
                alt="svipe.no"
              />
            </span>
            <div className="flex flex-col justify-center gap-4 sm:gap-8 flex-1">
              <h2 className="text-3xl dark:text-gray-100 hidden sm:inline-block mt-8 text-gray-800">
                Svipe
              </h2>
              <p className="text-lg dark:text-gray-200 text-gray-800 leading-8">
                Svipe is a quick and easy way to set up an online 'mini store'.
                It lets businesses start selling in a matter of minutes and
                includes Vipps Checkout; the fastest and most user-friendly
                way of paying in Norway.
              </p>
              <a
                href="https://svipe.no"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 text-center text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Go to Svipe
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mt-4 pb-8">
            <span className="block">
              <img
                className="w-full h-full object-cover"
                src={HogwartsImage}
                alt="hogwartslegacy.io"
              />
            </span>
            <div className="flex flex-col justify-center gap-4 sm:gap-8">
              <h2 className="text-3xl dark:text-gray-100 hidden sm:inline-block mt-8 text-gray-800">
                Hogwarts Legacy
              </h2>
              <p className="text-lg dark:text-gray-200 text-gray-800 leading-8">
                A small application with data
                and guides for Hogwarts
                Legacy. Not super useful, but fun to make.
              </p>
              <a
                href="https://hogwartslegacy.io"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 text-center text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Check it site
              </a>
            </div>
          </div>
          <h3 className="text-2xl dark:text-gray-100 mt-8 text-gray-800 font-semibold">
            Small apps
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <Link to="/brreg">
              <span className="block sm:transition sm:duration-200 sm:ease-in-out sm:hover:-translate-y-1 sm:hover:scale-105">
                <img
                  className="w-full h-full object-cover border border-black"
                  src={CompanySearch}
                  alt="search for companies"
                />
                <span className="text-center">
                  <p className="dark:text-white px-3 py-4 sm:mt-7">
                    Search for Norwegian companies
                  </p>
                </span>
              </span>
            </Link>
            <a
              href="https://skulsta.github.io/reisefradrag"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sm:pt-7 block sm:transition sm:duration-200 sm:ease-in-out sm:hover:-translate-y-1 sm:hover:scale-105">
                <img
                  className="w-full h-full object-cover border border-black"
                  src={Reisefradrag}
                  alt="travel tax app"
                />
                <span className="text-center">
                  <p className="dark:text-white px-3 py-4">
                    Calculate your travel tax
                  </p>
                </span>
              </span>
            </a>
            <Link to="/memory">
              <span className="block sm:transition sm:duration-200 sm:ease-in-out sm:hover:-translate-y-1 sm:hover:scale-105">
                <img
                  className="w-full h-full object-cover border border-black"
                  src={Memory}
                  alt="memory game"
                />
                <span className="text-center">
                  <p className="dark:text-white px-3 py-4 sm:mt-7">
                    Memory game
                  </p>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
