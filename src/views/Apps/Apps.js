import React from "react";
import AllApps from "./AllApps";

export default function Apps() {
  return (
    <div className="bg-navy bg-opacity-10 dark:bg-black dark:bg-opacity-100 min-h-screen">
      <div className=" mx-auto px-4 max-w-screen-xl">
        <AllApps />
      </div>
    </div>
  );
}
