import "./AddSection.css";
import { fromCamelCase } from "../helpers.js";
import Form from "./Form.jsx";
import ItemsList from "./ItemsList.jsx";

export default function AddSection({
  heading,
  cvEntries,
  setCvEntries,
  fields,
}) {
  const sectionEntries = cvEntries.filter((entry) => {
    return (entry.type = heading);
  });

  return (
    <section className="add">
      <h1>{fromCamelCase(heading)}</h1>
      <Form
        cvEntries={cvEntries}
        setCvEntries={setCvEntries}
        fields={fields}
        disabled={heading === "generalInformation" && sectionEntries.length > 0}
      />
      {sectionEntries.length > 0 && (
        <ItemsList sectionEntries={sectionEntries} displayName={heading} />
      )}
    </section>
  );
}
