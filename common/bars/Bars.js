import React, { Fragment } from "react";
import BarItem from "../barItem/BarItem";
function Bars({ barData }) {
  return (
    <Fragment>
      {barData.map(({ id, barBg }) => (
        <BarItem key={id} barBg={barBg} />
      ))}
    </Fragment>
  );
}
export default Bars;
