import React from "react";
import styles from "./TextList.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import TriagleArrow from "../../assets/icons/triangle-arrow.svg";
import Image from "next/image";
import Link from "next/link";
import CircleBtn from "../circleBtn/CircleBtn";
function TextList({ data }) {
  const { supportContainer, supportItem } = styles;
  return (
    <div className={supportContainer}>
      {data.map(({ id, text, bg }) => (
        <Link
          key={id}
          href="/"
          className={`${supportItem} ${commonStyles.flexRowCenterCenter} ${bg}`}
        >
          <h1>{text}</h1>
          <Image src={TriagleArrow} alt="triangle-arrow" />
        </Link>
      ))}
      <CircleBtn />
    </div>
  );
}
export default TextList;
