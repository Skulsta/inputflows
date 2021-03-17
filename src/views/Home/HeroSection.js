import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";

export default function HeroSection() {
  return (
    <div className="justify-center items-center">
      <div className="flex px-4 flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 max-w-screen-xl mx-auto">
        <div className="flex flex-col space-y-4 lg:w-1/3">
          <div className="p-8 border w-full self-start bg-white border-none rounded leading-loose space-y-8">
            <div>
              <h2 className="text-2xl text-center text-gray-800">
                Stian Skulstad
              </h2>
              <p className="text-lg text-center text-gray-700">
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
          <div className="p-8 border text-center  w-full self-start bg-white border-none rounded leading-loose space-y-8">
            <div>
              <p>
                In the name of open source, all the code on this site can be
                found on
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
            </div>
          </div>
        </div>
        <div className="p-8 border bg-white lg:w-2/3 border-none rounded space-y-8 leading-loose">
          <h2 className="text-2xl text-gray-800">
            My background - in four paragraphs ⏱
          </h2>
          <p>
            I'm a software developer with a background in innovation management.
            I first stumbled upon programming while doing my initial service in
            the army. I was preparing to apply to law school when someone showed
            me a website called Codecademy.
          </p>
          <p>
            To finally get code to run after fighting countless Javascript
            errors was such a great feeling that it made me throw out the law
            books and apply for a degree in informatics instead.
          </p>
          <p>
            During my first semester, I got introduced to a student organization
            that promoted entrepreneurship and innovation among students. The
            organization took me on a parallel path into the startup world. I
            became the organization leader and attending programs such as Early
            Stage in Bergen, European Innovation Academy in Turin, and The
            Norwegian School of Entrepreneurship in San Francisco.
          </p>
          <p>
            My interest in technology and innovation then took me to the
            Department of Informatics at The University of Oslo. They offered a
            master's degree in Entrepreneurship and Innovation Management, which
            neatly tied my previous years together.
          </p>
        </div>
      </div>
    </div>
  );
}
