import React, { Fragment } from "react";
import styles from "./LogoBanner.module.scss";
import blueLogo from "assets/logos/blue-logo.svg";
import greenLogo from "assets/logos/green-logo.svg";
import yellowLogo from "assets/logos/yellow-logo.svg";
import pinkLogo from "assets/logos/pink-logo.svg";
import purpleLogo from "assets/logos/purple-logo.svg";
import darkBlueLogo from "assets/logos/dark-blue-logo.svg";
import Image, { StaticImageData } from "next/image";

interface LogoData {
  id: number;
  logo: StaticImageData;
}

export function LogoBanner(): JSX.Element {
  const { logoBannerContainer, logoWrapper, logoBox } = styles;

  const logoData: LogoData[] = [
    { id: 1, logo: blueLogo },
    { id: 2, logo: greenLogo },
    { id: 3, logo: yellowLogo },
    { id: 4, logo: pinkLogo },
    { id: 5, logo: purpleLogo },
    { id: 6, logo: darkBlueLogo },
  ];

  const renderLogos = (): JSX.Element => {
    return (
      <div className={logoWrapper}>
        {logoData?.map(({ id, logo }) => (
          <div key={id} className={logoBox}>
            <Image src={logo} alt="logo" />
          </div>
        ))}
      </div>
    );
  };

  const keys = [...Array(50).keys()];

  return (
    <div className={logoBannerContainer}>
      {keys?.map((item) => (
        <Fragment key={item}> {renderLogos()} </Fragment>
      ))}
    </div>
  );
}