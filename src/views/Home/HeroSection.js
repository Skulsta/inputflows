import React from "react";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col mb-4 -mt-12">
        <div className="border mx-auto self-start border-none bg-white dark:bg-black rounded-full leading-loose">
          <div className="flex justify-center space-x-8 py-2 px-6 w-max mx-auto">
            <a
              className="transition duration-200 ease-in-out transform hover:rotate-45"
              href="https://www.linkedin.com/in/stian-skulstad/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={LinedInIcon} alt="linkedin button" />
            </a>
            <a
              className="transition duration-200 ease-in-out transform hover:-rotate-45 bg-white rounded-full"
              href="https://github.com/Skulsta"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={GitHubIcon} alt="linkedin button" />
            </a>
            <a
              className="transition duration-200 ease-in-out transform hover:rotate-45"
              href="https://twitter.com/Skulsta"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={TwitterIcon} alt="twitter button" />
            </a>
          </div>
        </div>
      </div>
    <div className="flex flex-col-reverse max-w-screen-xl mx-auto my-12 sm:my-24 px-4">
      <div className="flex flex-col text-xl border lg:w-3/5 border-none rounded space-y-8 leading-loose dark:text-gray-100 sm:text-justify">
        <p>
          <span className="font-semibold tracking-widest">Welcome!</span> This is the personal website of Stian Skulstad. He is a
          software developer from Norway, working as a consultant. He also apparently writes about himself in third person.
        </p>
        <p>
          Working as a consultant means always making what others want, which
          makes sense as they pay him to do so. Sometimes he wants to make his
          own stuff though. That's what this website is for.
        </p>
      </div>

    </div>
    </>
  );
}
