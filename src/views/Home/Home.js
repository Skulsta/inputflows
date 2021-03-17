import React from "react";
import HeroSection from "./HeroSection";
import AllPosts from "../Posts/AllPosts";

export default function Home() {
  return (
    <div className="bg-green-800 bg-opacity-25 min-h-screen py-8">
      <HeroSection />
      <AllPosts />
    </div>
  );
}
