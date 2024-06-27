import "./Form.css";
import { fromCamelCase } from "../helpers.js";
import { v4 as uuidV4 } from "uuid";
import { useState } from "react";

export default function Form({
  cvEntries,
  setCvEntries,
  fields,
  type,
  disabled,
}) {
  const [values, setValues] = useState(
    new Array(Object.entries(fields).length).fill(""),
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const myFormData = new FormData(form);

    const newEntry = {};
    for (const [key, value] of myFormData) {
      // myFormData is basically an array
      newEntry[key] = value;
    }
    newEntry.type = type;
    newEntry.key = uuidV4();

    setCvEntries([...cvEntries, newEntry]); // Add object
    setValues(new Array(Object.entries(fields).length).fill("")); // Empty previous array
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
                disabled={disabled}
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
        <button type="submit" disabled={disabled}>
          Save
        </button>
      </div>
    </form>
  );
}
