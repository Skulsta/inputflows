import CompanyInfo from "./CompanyInfo";

export default function SearchResults(props) {
  let fetchedArray = props.data;
  const print = fetchedArray.map((item) => {
    return (
      <div key={item.organisasjonsnummer}>
        <div className="inline-block">
          <CompanyInfo
            navn={item.navn}
            org={item.organisasjonsnummer}
            beskriv1={item.naeringskode1 && item.naeringskode1.beskrivelse}
            beskriv2={
              item.organisasjonsform && item.organisasjonsform.beskrivelse
            }
            sted={item.forretningsadresse && item.forretningsadresse.poststed}
            sted1={item.forretningsadresse && item.forretningsadresse.adresse}
            sted2={
              item.forretningsadresse && item.forretningsadresse.postnummer
            }
            epost={""}
            hjemmeside={item.hjemmeside}
            konkurs={item.konkurs}
          />
        </div>
      </div>
    );
  });

  return <div className="space-y-10">{print}</div>;
}
