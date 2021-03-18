import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AllPosts from "../Posts/AllPosts";
import mixpanel from "mixpanel-browser";

export default function Home() {
  useEffect(() => {
    mixpanel.track("Frontpage view");
  }, []);

  return (
    <div className="bg-green-800 bg-opacity-25 min-h-screen py-4">
      <HeroSection />
      <AllPosts />
    </div>
  );
}
