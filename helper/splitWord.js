export const splitWord = (word) => word && word.split("-").join(" ");

export const splitAndCapitalize = (word) =>
  word &&
  word
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
