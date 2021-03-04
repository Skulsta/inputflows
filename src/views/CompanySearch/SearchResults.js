import Info from "./Info";

export default function SearchResults(props) {
  let fetchedArray = props.data;
  const print = fetchedArray.map((item) => {
    return (
      <div key={item.organisasjonsnummer}>
        <Info
          navn={item.navn}
          org={item.organisasjonsnummer}
          beskriv1={item.naeringskode1 && item.naeringskode1.beskrivelse}
          beskriv2={
            item.organisasjonsform && item.organisasjonsform.beskrivelse
          }
          sted={item.forretningsadresse && item.forretningsadresse.poststed}
          sted1={item.forretningsadresse && item.forretningsadresse.adresse}
          sted2={item.forretningsadresse && item.forretningsadresse.postnummer}
          epost={""}
          hjemmeside={item.hjemmeside}
          konkurs={item.konkurs}
        />
      </div>
    );
  });

  return (
    <div className="SearchResults">
      <div style={{ padding: fetchedArray.length > 0 && "4%" }}> {print}</div>
    </div>
  );
}
