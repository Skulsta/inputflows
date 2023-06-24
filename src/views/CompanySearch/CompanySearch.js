import React from "react";
import SearchInput from "./SearchInput";

const CompanySearch = () => (
  <div className="dark:bg-black">
    <div className="max-w-screen-xl mx-auto py-8 sm:py-20 min-h-screen">
      <div className="px-4 max-w-xl mx-auto">
        <h2 className="text-2xl dark:text-white leading-none">
          Search for Norwegian companies
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mt-8 mb-4">
          Start typing a company name or paste an organization number.
        </p>
        <SearchInput />
      </div>
    </div>
  </div>
);

export default CompanySearch;
