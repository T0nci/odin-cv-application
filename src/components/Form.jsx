import "./Form.css";
import { fromCamelCase } from "../helpers.js";
import { v4 as uuidV4 } from "uuid";

export default function Form({ cvEntries, setCvEntries, fields, disabled }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const myFormData = new FormData(form);

    const newEntry = {};
    for (const [key, value] of myFormData) {
      newEntry[key] = value;
    }
    newEntry.type = fields.type;
    newEntry.key = uuidV4();

    setCvEntries([...cvEntries, newEntry]); // Add object
    form.reset();
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
