import React from "react";
import KassaImage from "../../assets/images/kassa.png";
import CompanySearch from "../../assets/images/companySearch.png";
import Reisefradrag from "../../assets/images/reisefradrag.png";
import Memory from "../../assets/images/memory.png";
import { Link } from "react-router-dom";

export default function AllPosts() {
  return (
    <div className="bg-opacity-25">
      <div className="flex max-w-screen-xl mx-auto justify-center">
        <div>
          <h2 className="text-2xl dark:text-gray-100 mt-8 text-gray-800">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-4 pb-8">
            <span className="block cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
              <img
                className="w-full h-full object-cover border border-black"
                src={KassaImage}
                alt="kassa.no"
              />
            </span>
            <div className="flex flex-col gap-8 justify-center">
              <h3 className="text-4xl dark:text-gray-100 text-gray-800">
                Kassa.no
              </h3>
              <p className="text-lg dark:text-gray-200 text-gray-800 leading-8">
                My biggest project is fortunately not carried out alone. It's a
                platform for quickly and easily getting a small online store up
                and running. It lets businesses start selling online in a matter
                of minutes and includes Vipps Hurtigkasse, the fastest and most
                user friendly way of paying in Norway.
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                Check it out
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <Link to="/brreg">
              <span className="block transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                <img
                  className="w-full h-full object-cover border border-black"
                  src={CompanySearch}
                  alt="search for companies"
                />
                <span className="text-center">
                  <p className="dark:text-white px-3 py-4 mt-7">
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
              <span className="pt-7 block transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                <img
                  className="w-full h-full object-cover border border-black"
                  src={Reisefradrag}
                  alt="search for companies"
                />
                <span className="text-center">
                  <p className="dark:text-white px-3 py-4">
                    Calculate your travel tax
                  </p>
                </span>
              </span>
            </a>
            <a
              href="https://skulsta.github.io/reisefradrag"
              target="_blank"
              rel="noreferrer"
            >
              <span className="block transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                <img
                  className="w-full h-full object-cover border border-black"
                  src={Memory}
                  alt="search for companies"
                />
                <span className="text-center">
                  <p className="dark:text-white px-3 py-4 mt-7">Memory game</p>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
