import React, { useState } from "react";
import SearchResults from "./SearchResults";

export default function SearchInput() {
  const [data, setData] = useState("");
  const [dat, setDat] = useState([]);
  let fetchedData = dat;

  const HandleSøk = (event) => {
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
        if (enheter && event.target.value.length > 2) {
          setDat(enheter);
        } else {
          setDat([]);
        }
      });

    setData(event.target.value);
  };

  return (
    <div className="all">
      <input
        className="SearchInput"
        type="text"
        placeholder="Søk opp et selskap...  "
        onChange={HandleSøk}
        value={data}
      />
      <SearchResults data={fetchedData} />
    </div>
  );
}
