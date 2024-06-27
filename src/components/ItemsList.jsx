import "./ItemsList.css";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";

const fields = {
  generalInformation: "name",
  education: "schoolName",
  experience: "companyName",
};

export default function ItemsList({
  sectionEntries,
  displayName,
  cvEntries,
  setCvEntries,
}) {
  const handleDeleteClick = (e) => {
    const key = e.currentTarget.dataset.key;

    const newCvEntries = cvEntries.filter((entry) => {
      return !(entry.key === key);
    });

    setCvEntries([...newCvEntries]);
  };

  return (
    <ul className="splitter">
      {sectionEntries.map((entry) => {
        return (
          <li key={entry.key}>
            {entry[fields[displayName]]}
            <button aria-label="Edit entry">
              <img src={EditIcon} alt="" />
            </button>
            <button
              aria-label="Delete entry"
              data-key={entry.key}
              onClick={handleDeleteClick}
            >
              <img src={DeleteIcon} alt="" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
