import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";

export default function HeroSection() {
  return (
    <div className="justify-center items-center min-h-screen">
      <div className="flex p-4 pt-12 flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-screen-xl mx-auto">
        <div className="p-8 border w-full self-start bg-white border-none rounded lg:w-1/2 leading-loose space-y-8">
          <div>
            <h2 className="text-2xl text-center text-gray-800">
              Stian Skulstad
            </h2>
            <p className="text-lg text-center text-gray-600">
              stian.skulstad@gmail.com
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/stian-skulstad/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={LinedInIcon} alt="linkedin button" />
            </a>
            <a
              href="https://github.com/Skulsta"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={GitHubIcon} alt="linkedin button" />
            </a>
            <a
              href="https://twitter.com/Skulsta"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={TwitterIcon} alt="twitter button" />
            </a>
          </div>
        </div>
        <div className="p-8 border bg-white border-none rounded lg:w-2/3 space-y-8">
          <p>
            In the name of open source, the code for this site can be found on
            <a
              href="https://github.com/Skulsta/inputflows"
              target="_blank"
              rel="noreferrer"
              className="text-green-800 hover:text-green-600"
            >
              {" "}
              GitHub
            </a>
            .
          </p>
          <p>
            A section with all kinds of posts (one post) can be accessed in the{" "}
            <Link to="/posts" className="text-green-800 hover:text-green-600">
              {" "}
              posts section
            </Link>
            . This was made with an implementation of
            <a
              href="https://sanity.io"
              target="_blank"
              rel="noreferrer"
              className="text-green-800 hover:text-green-600"
            >
              {" "}
              Sanity
            </a>
            .
          </p>
          <p>
            Do you enjoy searching for companies in Brønnøysund? Now you can do
            it marginally{" "}
            <Link to="/brreg" className="text-green-800 hover:text-green-600">
              {" "}
              faster!{" "}
            </Link>{" "}
            Or play a simple version of the{" "}
            <Link to="/memory" className="text-green-800 hover:text-green-600">
              {" "}
              Memory Game
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
