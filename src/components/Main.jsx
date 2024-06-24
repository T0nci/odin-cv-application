import "./Main.css";
import AddSection from "./AddSection.jsx";
import Preview from "./Preview.jsx";
import { useState } from "react";

export default function Main() {
  const fields = {
    generalInformation: ["name", "phone", "email"],
    education: ["schoolName", "titleOfStudy", "location", "fromDate", "toDate"],
    experience: [
      "companyName",
      "positionTitle",
      "location",
      "mainResponsibilities",
      "fromDate",
      "toDate",
    ],
  };

  const [cvEntries, setCvEntries] = useState({});

  return (
    <main>
      <AddSection
        heading="General Information"
        cvEntries={cvEntries}
        setCvEntries={setCvEntries}
        fields={fields.generalInformation}
      />
      <Preview cvEntries={cvEntries} setCvEntries={setCvEntries} />
      <AddSection
        heading="Education"
        cvEntries={cvEntries}
        setCvEntries={setCvEntries}
        fields={fields.education}
      />
      <AddSection
        heading="Experience"
        cvEntries={cvEntries}
        setCvEntries={setCvEntries}
        fields={fields.experience}
      />
    </main>
  );
}
