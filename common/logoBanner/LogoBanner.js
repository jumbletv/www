import React, { useRef, useEffect, useState, Fragment } from "react";
import styles from "./LogoBanner.module.scss";
import blueLogo from "assets/logos/blue-logo.svg";
import greenLogo from "assets/logos/green-logo.svg";
import yellowLogo from "assets/logos/yellow-logo.svg";
import pinkLogo from "assets/logos/pink-logo.svg";
import purpleLogo from "assets/logos/purple-logo.svg";
import darkBlueLogo from "assets/logos/dark-blue-logo.svg";
import Image from "next/image";

function LogoBanner() {
  const { logoBannerContainer, logoWrapper, logoBox } = styles;

  const parentRef = useRef(null);
  const [repeatTimes, setRepeatTimes] = useState(0);

  useEffect(() => {
    calcElement();
    window.addEventListener("resize", calcElement);
    return () => window.removeEventListener("resize", calcElement);
  }, []);

  const calcElement = () => {
    const parentWidth = parentRef.current.offsetWidth;
    const repeatingNumber = Math.ceil(parentWidth / 300);
    setRepeatTimes(repeatingNumber);
  };

  const logoData = [
    { id: 1, logo: blueLogo },
    { id: 2, logo: greenLogo },
    { id: 3, logo: yellowLogo },
    { id: 4, logo: pinkLogo },
    { id: 5, logo: purpleLogo },
    { id: 6, logo: darkBlueLogo },
  ];

  const renderLogos = () => {
    return (
      <div className={logoWrapper}>
        {logoData.map(({ id, logo }) => (
          <div key={id} className={logoBox}>
            <Image src={logo} alt="logo" />
          </div>
        ))}
      </div>
    );
  };

  const keys = [...Array(repeatTimes).keys()];

  return (
    <div className={`${logoBannerContainer}`} ref={parentRef}>
      {keys.map((item) => (
        <Fragment key={item}> {renderLogos()} </Fragment>
      ))}
    </div>
  );
}

export default LogoBanner;
