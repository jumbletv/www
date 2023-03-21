export const splitWord = (word: string): string => word && word.split("-").join(" ");

export const splitAndCapitalize = (word: string): string =>
  word &&
  word
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (l) => l.toUpperCase());