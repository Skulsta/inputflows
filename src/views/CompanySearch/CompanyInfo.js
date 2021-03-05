import React, { useState } from "react";

export default function Info(props) {
  const [expanded, setExpanded] = useState(false);
  let expandedContent;

  if (expanded) {
    expandedContent = (
      <div className="space-y-2 pt-2 text-gray-800">
        <p> Organization number: {props.org} </p>
        <p> Description: {props.beskriv2} </p>
        <p> Industry code: {props.beskriv1} </p>
        <p style={{ display: !props.sted && "none" }}>
          {" "}
          Postal: {props.sted2} {props.sted}
        </p>{" "}
        <p style={{ display: !props.sted1 && "none" }}>
          Address: {props.sted1}
        </p>
        <p style={{ display: !props.epost && "none" }}>Email:{props.epost}</p>
        <p style={{ display: !props.hjemmeside && "none" }}>
          <a
            href={"https://" + props.hjemmeside}
            target="_blank"
            rel="noreferrer"
            className="text-green-800 hover:text-green-600"
          >
            Go to website
          </a>
        </p>
        <p
          id="konkurs"
          className="text-red-800"
          style={{ display: !props.konkurs && "none" }}
        >
          The company is bankrupt
        </p>
      </div>
    );
  }

  return (
    <div className="w-min">
      <h3 className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
        {" "}
        {props.navn}{" "}
      </h3>
      {expandedContent}
    </div>
  );
}
