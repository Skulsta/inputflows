import React, { useState } from "react";
import DownArrow from "../../assets/icons/down-arrow.svg";
import UpArrow from "../../assets/icons/up-arrow.svg";

export default function Info(props) {
  const [expanded, setExpanded] = useState(false);
  let expandedContent;

  if (expanded) {
    expandedContent = (
      <div className="space-y-2 pt-2 text-gray-700">
        <p>
          <span className="text-blue-900">Organization number:</span>{" "}
          {props.organizationNumber}{" "}
        </p>
        {props.description && (
          <p>
            <span className="text-blue-900">Description:</span>{" "}
            {props.description}{" "}
          </p>
        )}
        <p>
          <span className="text-blue-900">Industry code:</span>{" "}
          {props.industryCode}{" "}
        </p>
        {props.address && (
          <p>
            <span className="text-blue-900">Postal:</span> {props.postalNumber}{" "}
            {props.postal}
          </p>
        )}
        {props.address && (
          <p>
            <span className="text-blue-900">Address:</span> {props.address}
          </p>
        )}
        {props.website && (
          <p>
            <a
              href={"https://" + props.website}
              target="_blank"
              rel="noreferrer"
              className="text-green-800 hover:text-green-900"
            >
              Go to website
            </a>
          </p>
        )}
        {props.bankrupt && (
          <p className="text-red-dark">The company is bankrupt</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex justify-between cursor-pointer text-gray-800"
        onClick={() => setExpanded(!expanded)}
      >
        <h3>{props.name}</h3>
        {expanded ? (
          <img src={UpArrow} alt="close icon" />
        ) : (
          <img src={DownArrow} alt="open icon" />
        )}
      </div>
      {expandedContent}
    </div>
  );
}
