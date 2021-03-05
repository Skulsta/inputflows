import React, { useState } from "react";
import SearchResults from "./SearchResults";

export default function SearchInput() {
  const [data, setData] = useState("");
  const [searchData, setSearchData] = useState([]);
  let fetchedData = searchData;

  const HandleSearch = (event) => {
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
        const enheter = data._embedded && data._embedded.enheter;
        if (event.target.value.length === 0) {
          setSearchData([]);
        } else {
          setSearchData(enheter);
        }
      });

    setData(event.target.value);
  };

  return (
    <div className="space-y-10">
      <input
        className="border text-gray-800 px-4 py-2 focus:outline-none w-full rounded border-green-800 border-opacity-25 hover:border-opacity-50 focus:border-opacity-50"
        type="text"
        placeholder="Company name or organization number"
        onChange={HandleSearch}
        value={data}
      />
      <SearchResults data={fetchedData} />
    </div>
  );
}
