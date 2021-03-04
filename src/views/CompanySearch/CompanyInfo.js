import React, { useState } from "react";

export default function Info(props) {
  const [expanded, setExpanded] = useState(false);
  let expandedContent;

  if (expanded) {
    expandedContent = (
      <div className="information">
        <span> OrgNr: {props.org} </span>
        <br />
        <span> Beskrivelse: {props.beskriv2} </span>
        <br />
        <span> Næringskode beskrivelse: {props.beskriv1} </span>
        <br />
        <span style={{ display: !props.sted && "none" }}>
          {" "}
          PostSted: {props.sted2} {props.sted}
          <br />
        </span>{" "}
        <span style={{ display: !props.sted1 && "none" }}>
          Adresse: {props.sted1}
          <br />
        </span>
        <span style={{ display: !props.epost && "none" }}>
          E-post:{props.epost}
          <br />
        </span>
        <span style={{ display: !props.hjemmeside && "none" }}>
          <a href={"http://" + props.hjemmeside}>Besøk nettsiden</a>
          <br />
        </span>
        <span id="konkurs" style={{ display: !props.konkurs && "none" }}>
          Selskapet har gått konkurs.
        </span>
      </div>
    );
  }

  return (
    <div>
      <h3 className="Navn" onClick={() => setExpanded(!expanded)}>
        {" "}
        {props.navn}{" "}
      </h3>
      {expandedContent}
    </div>
  );
}
