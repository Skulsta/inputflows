import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AllPosts from "../Posts/AllPosts";
import mixpanel from "mixpanel-browser";

export default function Home() {
  useEffect(() => {
    mixpanel.track("Frontpage view");
  }, []);

  return (
    <div className="bg-navy bg-opacity-10 min-h-screen py-4">
      <HeroSection />
      <div className=" mx-auto px-4 max-w-screen-xl">
        <AllPosts />
      </div>
    </div>
  );
}
