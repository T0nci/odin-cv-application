import "./Main.css";
import AddSection from "./AddSection.jsx";
import Preview from "./Preview.jsx";
import { useState } from "react";

const fields = {
  generalInformation: { name: "text", phone: "tel", email: "email" },
  education: {
    schoolName: "text",
    titleOfStudy: "text",
    location: "text",
    fromDate: "date",
    toDate: "date",
  },
  experience: {
    companyName: "text",
    positionTitle: "text",
    location: "text",
    mainResponsibilities: "text",
    fromDate: "date",
    toDate: "date",
  },
};

export default function Main() {
  const [cvEntries, setCvEntries] = useState([]);

  return (
    <main>
      <AddSection
        heading="generalInformation"
        cvEntries={cvEntries}
        setCvEntries={setCvEntries}
        fields={fields.generalInformation}
      />
      <Preview cvEntries={cvEntries} />
      <AddSection
        heading="education"
        cvEntries={cvEntries}
        setCvEntries={setCvEntries}
        fields={fields.education}
      />
      <AddSection
        heading="experience"
        cvEntries={cvEntries}
        setCvEntries={setCvEntries}
        fields={fields.experience}
      />
    </main>
  );
}
