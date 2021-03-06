import React, { useState } from "react";

export default function Info(props) {
  const [expanded, setExpanded] = useState(false);
  let expandedContent;

  if (expanded) {
    expandedContent = (
      <div className="space-y-2 pt-2 text-gray-800">
        <p>Organization number: {props.organizationNumber} </p>
        {props.description && <p>Description: {props.description} </p>}
        <p>Industry code: {props.industryCode} </p>
        {props.address && (
          <p>
            Postal: {props.postalNumber} {props.postal}
          </p>
        )}
        {props.address && <p>Address: {props.address}</p>}
        {props.website && (
          <p className="text-green-800 hover:text-green-600">
            <a
              href={"https://" + props.website}
              target="_blank"
              rel="noreferrer"
              className="text-green-800 hover:text-green-600"
            >
              Go to website
            </a>
          </p>
        )}
        {props.bankrupt && (
          <p className="text-red-800">The company is bankrupt</p>
        )}
      </div>
    );
  }

  return (
    <div className="">
      <h3 className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
        {props.name}
      </h3>
      {expandedContent}
    </div>
  );
}
