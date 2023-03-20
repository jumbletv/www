import React, { Fragment } from "react";
import { BarItem } from "../barItem/BarItem";

interface BarData {
  id: number;
  barBg: string;
}

interface Props {
  barData: BarData[];
}

export function Bars({ barData }: Props) {
  return (
    <Fragment>
      {barData.map(({ id, barBg }: BarData) => (
        <BarItem key={id} barBg={barBg} />
      ))}
    </Fragment>
  );
}