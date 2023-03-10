import React, { useState } from "react";
import styles from "./TextList.module.scss";
import TriagleArrow from "../../assets/icons/triangle-arrow.svg";
import Image from "next/image";
import { CircleBtn } from "../circleBtn/CircleBtn";
import { useTranslation } from "next-i18next";

export function TextList({ data, showBtn }) {
  const {
    supportContainer,
    supportItem,
    listContainer,
    listTitleContainer,
    downArrow,
  } = styles;
  const { t } = useTranslation("faq");
  const [listId, setListId] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = (id) => {
    setExpanded(listId === id && expanded ? false : true);
    setListId(id);
  };

  const renderDetail = (id, addLink, detail) => {
    const { beforeLink, linkText, afterLink, link } = detail;
    if (id === listId && expanded) {
      if (addLink) {
        return (
          <p>
            {t(beforeLink)}
            <a href={link}>{t(linkText)}</a>
            {t(afterLink)}
          </p>
        );
      } else {
        return <p> {t(detail)} </p>;
      }
    }
  };

  return (
    <div className={supportContainer}>
      {data.map(({ id, text, bg, addLink, detail }) => (
        <div
          key={id}
          className={`${supportItem} ${bg}`}
          onClick={() => handleCollapse(id)}
        >
          <div className={listContainer}>
            <div className={listTitleContainer}>
              <h1> {t(`${text}`)}</h1>
              <Image
                src={TriagleArrow}
                alt="triangle-arrow"
                className={id === listId && expanded ? downArrow : null}
              />
            </div>
            {renderDetail(id, addLink, detail)}
          </div>
        </div>
      ))}
      {showBtn && <CircleBtn link="/frequently-asked-questions" />}
    </div>
  );
}
