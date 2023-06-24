import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AllApps from "../Apps/AllApps";
import mixpanel from "mixpanel-browser";

export default function Home() {
  useEffect(() => {
    mixpanel.track("Frontpage view");
  }, []);

  return (
    <div className="bg-navy bg-opacity-10 dark:bg-black dark:bg-opacity-100 min-h-screen py-6">
      <HeroSection />
      <div className="mx-auto max-w-screen-xl">
        <AllApps />
      </div>
    </div>
  );
}
