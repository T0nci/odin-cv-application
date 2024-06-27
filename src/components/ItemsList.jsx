import "./ItemsList.css";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";

const fields = {
  generalInformation: "name",
  education: "schoolName",
  experience: "companyName",
};

export default function ItemsList({ sectionEntries, displayName }) {
  return (
    <ul className="splitter">
      {sectionEntries.map((entry) => {
        return (
          <li key={entry.key}>
            {entry[fields[displayName]]}
            <button aria-label="Edit entry">
              <img src={EditIcon} alt="" />
            </button>
            <button aria-label="Delete entry">
              <img src={DeleteIcon} alt="" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
