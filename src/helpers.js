function toCamelCase(name) {
  if (typeof name !== "string") throw new Error("Expected string as argument!");

  if (name.length < 1) return "";

  return name
    .toLowerCase()
    .split(" ")
    .map((val, index) => {
      return index === 0 ? val : val[0].toUpperCase() + val.slice(1);
    })
    .join("");
}

function fromCamelCase(name) {
  if (typeof name !== "string") throw new Error("Expected string as argument!");

  if (name.length < 1) return "";

  let newName = "";
  for (let i = 0; i < name.length; i++) {
    if (/[A-Z]/.test(name[i])) newName += " " + name[i].toLowerCase();
    else newName += name[i];
  }

  return newName[0].toUpperCase() + newName.slice(1);
}

const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "June",
  "July",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];
function getMonthYear(date) {
  if (!(date instanceof Date))
    throw new Error("Argument must be a Date object!");

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export { toCamelCase, fromCamelCase, getMonthYear };
