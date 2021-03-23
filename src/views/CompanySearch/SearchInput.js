import React, { useState } from "react";
import SearchResults from "./SearchResults";

const SearchInput = () => {
  const [searchData, setSearchData] = useState([]);

  const handleSearch = (event) => {
    let url;

    if (isNaN(event.target.value)) {
      url =
        "https://data.brreg.no/enhetsregisteret/api/enheter?navn=" +
        event.target.value;
    } else {
      url =
        "https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=" +
        event.target.value;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const companies = data._embedded && data._embedded.enheter;
        if (event.target.value.length === 0) {
          setSearchData([]);
        } else {
          setSearchData(companies);
        }
      });
  };

  return (
    <div>
      <input
        className="border text-gray-800 px-4 py-2 mb-4 focus:outline-none w-full rounded border-blue-800 hover:border-opacity-50 focus:border-opacity-50"
        type="text"
        placeholder="Company name or organization number"
        onChange={handleSearch}
      />
      <SearchResults companyData={searchData} />
    </div>
  );
};

export default SearchInput;
