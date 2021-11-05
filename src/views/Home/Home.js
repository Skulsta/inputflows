import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AllPosts from "../Posts/AllPosts";
import mixpanel from "mixpanel-browser";

export default function Home() {
  useEffect(() => {
    mixpanel.track("Frontpage view");
  }, []);

  return (
    <div className="bg-navy bg-opacity-10 dark:bg-black dark:bg-opacity-100 min-h-screen py-6">
      <HeroSection />
      <div className=" mx-auto px-4 max-w-screen-xl">
        <AllPosts />
      </div>
    </div>
  );
}
