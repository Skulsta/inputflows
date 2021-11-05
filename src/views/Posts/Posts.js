import React from "react";
import AllPosts from "./AllPosts";

export default function Posts() {
  return (
    <div className="bg-navy bg-opacity-10 dark:bg-black dark:bg-opacity-100 min-h-screen">
      <div className=" mx-auto px-4 max-w-screen-xl">
        <AllPosts />
      </div>
    </div>
  );
}
