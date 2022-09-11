import React from "react";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import ProfileImage from "../../assets/images/inputflows_profile.jpeg";

export default function HeroSection() {
  return (
    <div className="flex px-4 flex-col-reverse md:flex-row justify-center md:space-x-4 md:space-y-0 max-w-screen-xl mx-auto mb-4">
      <div className="flex flex-col text-lg justify-center p-8 border bg-white dark:bg-gray-900 lg:w-2/3 border-none rounded space-y-8 leading-loose dark:text-gray-100 sm:text-justify">
        <p>
          Stian is a frontend developer with a background in innovation
          management. He also apparently writes about himself in 3rd person.
        </p>
        <p>
          Working as a consultant means always making what others want, which
          makes sense as they pay him to do so. Sometimes he wants to make his
          own stuff though. That's where this site comes in.
        </p>
      </div>
      <div className="flex flex-col lg:w-1/3 mb-4">
        <div className="p-8 border w-full self-start bg-white dark:bg-gray-900 border-none rounded leading-loose space-y-8">
          <div>
            <img
              className="rounded-full w-40 mx-auto"
              src={ProfileImage}
              alt="Profile"
            />
          </div>
          <div>
            <h2 className="text-2xl dark:text-gray-100 text-center text-gray-800">
              Stian Skulstad
            </h2>
            <p className="text-lg text-center text-gray dark:text-gray-200">
              stian.skulstad@gmail.com
            </p>
          </div>
          <div className="flex justify-center space-x-8 dark:bg-gray py-2 px-10 w-max mx-auto rounded-md">
            <a
              className="transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105"
              href="https://www.linkedin.com/in/stian-skulstad/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={LinedInIcon} alt="linkedin button" />
            </a>
            <a
              className="transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105"
              href="https://github.com/Skulsta"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={GitHubIcon} alt="linkedin button" />
            </a>
            <a
              className="transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105"
              href="https://twitter.com/Skulsta"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={TwitterIcon} alt="twitter button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
