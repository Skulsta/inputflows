import CompanyInfo from "./CompanyInfo";

export default function SearchResults(props) {
  let fetchedArray = props.data;
  const print = fetchedArray.map((company) => {
    return (
      <div key={company.organisasjonsnummer}>
        <div className="inline-block border w-full p-4 rounded border-blue-800">
          <CompanyInfo
            name={company.navn}
            organizationNumber={company.organisasjonsnummer}
            description={
              company.naeringskode1 && company.naeringskode1.beskrivelse
            }
            industryCode={
              company.organisasjonsform && company.organisasjonsform.beskrivelse
            }
            postal={
              company.forretningsadresse && company.forretningsadresse.poststed
            }
            address={
              company.forretningsadresse && company.forretningsadresse.adresse
            }
            postalNumber={
              company.forretningsadresse &&
              company.forretningsadresse.postnummer
            }
            website={company.hjemmeside}
            bankrupt={company.konkurs}
          />
        </div>
      </div>
    );
  });

  return <div className="space-y-4">{print}</div>;
}
