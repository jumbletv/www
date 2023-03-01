import React, { useRef, useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import { useTranslation } from "next-i18next";

function Banner({ bannerText, singleText }) {
  const parentRef = useRef(null);
  const [repeatTimes, setRepeatTimes] = useState(0);

  const { bannerContainer, singleBannerContainer } = styles;

  const { t } = useTranslation("common");

  useEffect(() => {
    calcElement();
    window.addEventListener("resize", calcElement);
    return () => window.removeEventListener("resize", calcElement);
  }, []);

  const calcElement = () => {
    const parentWidth = parentRef?.current?.offsetWidth;
    const repeatingNumber = Math.ceil(parentWidth / 200);
    setRepeatTimes(repeatingNumber);
  };

  const renderBanner = () => {
    if (singleText) {
      return (
        <div className={singleBannerContainer}>
          <h1>{t(bannerText)}</h1>
        </div>
      );
    } else {
      const keys = [...Array(repeatTimes).keys()];
      return (
        <div className={bannerContainer} ref={parentRef}>
          {keys.map((item) => (
            <h1 key={item}>{t(bannerText)}</h1>
          ))}
        </div>
      );
    }
  };

  return renderBanner();
}

export default Banner;
