import "./ItemsList.css";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import EditForm from "./EditForm.jsx";

const sections = {
  generalInformation: "name",
  education: "schoolName",
  experience: "companyName",
};

export default function ItemsList({
  sectionEntries,
  displayName,
  cvEntries,
  setCvEntries,
  fields,
}) {
  const handleDeleteClick = (e) => {
    const key = e.currentTarget.dataset.key;

    const newCvEntries = cvEntries.filter((entry) => {
      return !(entry.key === key);
    });

    setCvEntries([...newCvEntries]);
  };

  const handleEditClick = (e) => {
    const key = e.currentTarget.dataset.key;
    const entry = cvEntries.find((element) => {
      return element.key === key;
    });

    const oldEntry = {};
    for (const key in entry) {
      // myFormData is basically an array
      oldEntry[key] = entry[key];
    }
    oldEntry.edit = true;

    const index = cvEntries.findIndex((element) => {
      return element === entry;
    });
    const oldCvEntries = [...cvEntries];
    oldCvEntries[index] = oldEntry;

    setCvEntries(oldCvEntries); // Add object
  };

  return (
    <ul className="splitter">
      {sectionEntries.map((entry) => {
        return (
          <li key={entry.key}>
            {entry.edit === false ? (
              <>
                {entry[sections[displayName]]}
                <button
                  aria-label="Edit entry"
                  data-key={entry.key}
                  onClick={handleEditClick}
                >
                  <img src={EditIcon} alt="" />
                </button>
                <button
                  aria-label="Delete entry"
                  data-key={entry.key}
                  onClick={handleDeleteClick}
                >
                  <img src={DeleteIcon} alt="" />
                </button>
              </>
            ) : (
              <EditForm
                cvEntries={cvEntries}
                setCvEntries={setCvEntries}
                entry={entry}
                fields={fields}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
