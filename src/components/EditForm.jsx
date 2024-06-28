import "./EditForm.css";
import { fromCamelCase } from "../helpers.js";
import { useState } from "react";

export default function EditForm({ cvEntries, setCvEntries, entry, fields }) {
  const nonFields = ["key", "edit", "type"];
  const initialValues = Object.keys(entry)
    .filter((key) => !nonFields.includes(key))
    .map((key) => {
      return entry[key];
    });

  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const myFormData = new FormData(form);

    const newEntry = {};
    for (const [key, value] of myFormData) {
      // myFormData is basically an array
      newEntry[key] = value;
    }
    newEntry.type = entry.type;
    newEntry.key = entry.key;
    newEntry.edit = false;

    const index = cvEntries.findIndex((element) => {
      return element === entry;
    });
    const newCvEntries = [...cvEntries];
    newCvEntries[index] = newEntry;

    setCvEntries(newCvEntries); // Add object
  };

  const handleCancel = () => {
    const oldEntry = {};
    for (const key in entry) {
      oldEntry[key] = entry[key];
    }
    oldEntry.edit = false;

    const index = cvEntries.findIndex((element) => {
      return element === entry;
    });
    const oldCvEntries = [...cvEntries];
    oldCvEntries[index] = oldEntry;

    setCvEntries(oldCvEntries); // Add object
  };

  // put handleSubmit on onSubmit form and not onSubmit button
  return (
    <form className="splitter" onSubmit={handleSubmit}>
      {Object.entries(fields).map((field, index) => {
        return (
          <div key={index}>
            <label>
              {fromCamelCase(field[0])}:
              <input
                type={field[1]}
                name={field[0]}
                autoComplete="off"
                required
                value={values[index]}
                onChange={(e) => {
                  const newValues = [...values];
                  newValues[index] = e.target.value;
                  setValues(newValues);
                }}
              />
            </label>
          </div>
        );
      })}
      <div>
        <button type="button" onClick={handleCancel}>
          Close
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
