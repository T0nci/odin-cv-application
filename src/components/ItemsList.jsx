import "./ItemsList.css";

const fields = {
  generalInformation: "name",
  education: "schoolName",
  experience: "companyName",
};

export default function ItemsList({ sectionEntries, displayName }) {
  return (
    <ul className="splitter">
      {sectionEntries.map((entry) => {
        return <li key={entry.key}>{entry[fields[displayName]]}</li>;
      })}
    </ul>
  );
}
