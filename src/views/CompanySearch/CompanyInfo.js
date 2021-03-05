import React, { useState } from "react";

export default function Info(props) {
  const [expanded, setExpanded] = useState(false);
  let expandedContent;

  if (expanded) {
    expandedContent = (
      <div>
        <span> Organization number: {props.org} </span>
        <br />
        <span> Description: {props.beskriv2} </span>
        <br />
        <span> Industry code: {props.beskriv1} </span>
        <br />
        <span style={{ display: !props.sted && "none" }}>
          {" "}
          Postal: {props.sted2} {props.sted}
          <br />
        </span>{" "}
        <span style={{ display: !props.sted1 && "none" }}>
          Address: {props.sted1}
          <br />
        </span>
        <span style={{ display: !props.epost && "none" }}>
          Email:{props.epost}
          <br />
        </span>
        <span style={{ display: !props.hjemmeside && "none" }}>
          <a
            href={"https://" + props.hjemmeside}
            target="_blank"
            rel="noreferrer"
            className="text-green-800 hover:text-green-600"
          >
            Go to website
          </a>
          <br />
        </span>
        <span
          id="konkurs"
          className="text-red-800"
          style={{ display: !props.konkurs && "none" }}
        >
          The company is bankrupt
        </span>
      </div>
    );
  }

  return (
    <div className="w-min">
      <h3 onClick={() => setExpanded(!expanded)}> {props.navn} </h3>
      {expandedContent}
    </div>
  );
}
