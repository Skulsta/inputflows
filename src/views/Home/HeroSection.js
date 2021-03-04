import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-green-800 bg-opacity-25">
      <div className="justify-center items-center min-h-screen">
        <div className="flex p-4 pt-20 flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-screen-xl mx-auto">
          <div className="p-8 border w-full bg-white border-none rounded lg:w-1/2 space-y-8 leading-loose">
            <h2 className="text-2xl text-center text-gray-700">
              Stian Skulstad
            </h2>
            <div className="flex justify-center space-x-4">
              <p className="text-center">Twitter</p>
              <p className="text-center">LinkedIn</p>
              <p className="text-center">GitHub</p>
            </div>
          </div>
          <div className="p-8 border bg-white border-none rounded lg:w-2/3 space-y-8">
            <p>
              In the name of open source, the code for this site can be found
              here.
            </p>
            <p>
              A section with all kinds of posts (one post) can be accessed here.
              The data for this section is handled with an implementation of
              Sanity.
            </p>
            <p>
              Do enjoy searching for companies in Brønnøysund? Now you can do it
              marginally faster!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
