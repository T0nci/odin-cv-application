import "./Preview.css";
import { getMonthYear } from "../helpers";

export default function Preview({ cvEntries }) {
  const generalInformation = cvEntries.find(
    (entry) => entry.type === "generalInformation",
  );

  const education = cvEntries.filter((entry) => entry.type === "education");

  const experience = cvEntries.filter((entry) => entry.type === "experience");

  return (
    <section className="preview">
      {generalInformation !== undefined && (
        <section className="header text-center">
          <h1 className="name bold">{generalInformation.name}</h1>
          <p className="info">
            {generalInformation.phone} | {generalInformation.email}
          </p>
        </section>
      )}

      {education.length > 0 && (
        <section className="list-section">
          <h2 className="heading">Education</h2>
          <ul className="list">
            {education.map((entry) => {
              return (
                <li key={entry.key}>
                  <div className="row-1">
                    <p className="bold">{entry.titleOfStudy}</p>
                    <p>
                      {getMonthYear(new Date(entry.fromDate))} -{" "}
                      {getMonthYear(new Date(entry.toDate))}
                    </p>
                  </div>
                  <div className="row-2 italic">
                    <p>{entry.schoolName}</p>
                    <p>{entry.location}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {experience.length > 0 && (
        <section className="list-section">
          <h2 className="heading">Experience</h2>
          <ul className="list">
            {experience.map((entry) => {
              return (
                <li key={entry.key}>
                  <div className="row-1">
                    <p className="bold">{entry.positionTitle}</p>
                    <p>
                      {getMonthYear(new Date(entry.fromDate))} -{" "}
                      {getMonthYear(new Date(entry.toDate))}
                    </p>
                  </div>
                  <div className="row-2 italic">
                    <p>{entry.companyName}</p>
                    <p>{entry.location}</p>
                  </div>
                  <p className="main-responsibilities">
                    {entry.mainResponsibilities}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </section>
  );
}
