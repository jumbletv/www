import commonStyles from "styles/Common.module.scss";

const { yellowBg, lightPinkBg, darkPinkBg, greenBg, lightBlueBg } =
  commonStyles;

export type BarData = {
  id: number;
  barBg: string;
};

export const homeNavBarData = [
  { id: 1, barBg: lightBlueBg },
  { id: 2, barBg: greenBg },
  { id: 3, barBg: yellowBg },
  { id: 4, barBg: lightPinkBg },
  { id: 5, barBg: darkPinkBg },
];
export const jumblogNavBarData = [
  { id: 1, barBg: lightBlueBg },
  { id: 2, barBg: greenBg },
  { id: 3, barBg: yellowBg },
  { id: 4, barBg: lightPinkBg },
];
