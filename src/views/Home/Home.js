import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AllPosts from "../Posts/AllPosts";
import mixpanel from "mixpanel-browser";

export default function Home() {
  useEffect(() => {
    mixpanel.track("Frontpage view");
  }, []);

  return (
    <div className="bg-navy bg-opacity-10 min-h-screen pt-4 pb-12">
      <HeroSection />
      <AllPosts />
    </div>
  );
}
