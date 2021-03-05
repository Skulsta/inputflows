import React from "react";
import SearchInput from "./SearchInput";

export default function CompanySearch() {
  return (
    <div className="max-w-screen-xl mx-auto py-20 min-h-screen">
      <div className="px-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-light text-green-800 text-opacity-75">
          Search for Norwegian companies
        </h2>
        <p className="text-gray-700 mt-8 mb-4">
          Start typing a company name or paste an organization number.
        </p>
        <SearchInput />
      </div>
    </div>
  );
}
