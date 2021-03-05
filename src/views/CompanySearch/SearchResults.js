import CompanyInfo from "./CompanyInfo";

export default function SearchResults(props) {
  let fetchedArray = props.data;
  const print = fetchedArray.map((item) => {
    return (
      <div key={item.organisasjonsnummer}>
        <div className="inline-block border w-full p-4 rounded border-green-800 border-opacity-25">
          <CompanyInfo
            name={item.navn}
            organizationNumber={item.organisasjonsnummer}
            description={item.naeringskode1 && item.naeringskode1.beskrivelse}
            industryCode={
              item.organisasjonsform && item.organisasjonsform.beskrivelse
            }
            postal={item.forretningsadresse && item.forretningsadresse.poststed}
            address={item.forretningsadresse && item.forretningsadresse.adresse}
            postalNumber={
              item.forretningsadresse && item.forretningsadresse.postnummer
            }
            email={""}
            website={item.hjemmeside}
            bankrupt={item.konkurs}
          />
        </div>
      </div>
    );
  });

  return <div className="space-y-4">{print}</div>;
}
