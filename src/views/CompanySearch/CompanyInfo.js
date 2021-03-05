import React, { useState } from "react";

export default function Info(props) {
  const [expanded, setExpanded] = useState(false);
  let expandedContent;

  if (expanded) {
    expandedContent = (
      <div className="space-y-2 pt-2 text-gray-800">
        <p> Organization number: {props.organizationNumber} </p>
        <p> Description: {props.description} </p>
        <p> Industry code: {props.industryCode} </p>
        <p style={{ display: !props.postal && "none" }}>
          {" "}
          Postal: {props.postalNumber} {props.postal}
        </p>{" "}
        <p style={{ display: !props.address && "none" }}>
          Address: {props.address}
        </p>
        <p style={{ display: !props.email && "none" }}>Email:{props.email}</p>
        <p style={{ display: !props.website && "none" }}>
          <a
            href={"https://" + props.website}
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
          style={{ display: !props.bankrups && "none" }}
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
        {props.name}{" "}
      </h3>
      {expandedContent}
    </div>
  );
}
