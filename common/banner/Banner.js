import React, { useRef, useEffect, useState } from "react";
import styles from "./Banner.module.scss";

function Banner({ bannerText }) {
  const parentRef = useRef(null);
  const [repeatTimes, setRepeatTimes] = useState(0);

  useEffect(() => {
    calcElement();
    window.addEventListener("resize", calcElement);
    return () => window.removeEventListener("resize", calcElement);
  }, []);

  const calcElement = () => {
    const parentWidth = parentRef.current.offsetWidth;
    const repeatingNumber = Math.ceil(parentWidth / 200);
    setRepeatTimes(repeatingNumber);
  };

  const keys = [...Array(repeatTimes).keys()];

  return (
    <div className={`${styles.bannerContainer}`} ref={parentRef}>
      {keys.map((item) => (
        <h1 key={item}>{bannerText}</h1>
      ))}
    </div>
  );
}

export default Banner;
