import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import commonStyles from "../../styles/Common.module.scss";
import logo from "../../assets/logos/jumble-logo.svg";
import Image from "next/image";
import FacebookIcon from "../../components/social/FacebookIcon";
import InstagramIcon from "../../components/social/InstagramIcon";
import WhatsappIcon from "../../components/social/WhatsappIcon";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import Link from "next/link";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMobileNav = () => {
    const navId = document.getElementById("mobile-nav");
    if (navId) {
      if (toggleMenu) {
        navId.style.height = "0";
      } else {
        navId.style.height = "300px";
      }
      setToggleMenu(!toggleMenu);
    }
  };
  const {
    navContainer,
    logoImg,
    menuListContainer,
    menuItem,
    arrows,
    socialBox,
    mobileMenu,
    sideNav,
    menuIcon,
    mobileMenuItem,
  } = styles;
  const { flexRowBetweenCenter, flexRowStartCenter, flexColumnCenterCenter } =
    commonStyles;
  return (
    <div className={`${navContainer} ${flexRowBetweenCenter}`}>
      <Link href="/">
        <Image src={logo} alt="logo" className={logoImg} />
      </Link>
      <div className={`${menuListContainer} ${flexRowStartCenter}`}>
        <div className={` ${flexRowStartCenter}`}>
          <div className={`${menuItem} ${flexRowBetweenCenter}`}>
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p>Live</p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </div>
          <div className={`${menuItem} ${flexRowBetweenCenter}`}>
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <Link href="/the-jumblog">
              <p>The Jumblog</p>
            </Link>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </div>
          <div className={`${menuItem} ${flexRowBetweenCenter}`}>
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p>Brands</p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </div>
          <div className={`${menuItem} ${flexRowBetweenCenter}`}>
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p>FAQ</p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </div>
          <div className={`${menuItem} ${flexRowBetweenCenter}`}>
            <Image src={RightArrow} alt="arrow-left" className={arrows} />
            <p>Get in Touch</p>
            <Image src={LeftArrow} alt="arrow-left" className={arrows} />
          </div>
        </div>
        <div className={`${flexRowStartCenter}`}>
          <div className={`${socialBox} ${flexColumnCenterCenter}`}>
            <InstagramIcon />
          </div>
          <div className={`${socialBox} ${flexColumnCenterCenter}`}>
            <FacebookIcon />
          </div>
          <div className={`${socialBox} ${flexColumnCenterCenter}`}>
            <WhatsappIcon />
          </div>
          <div
            className={`${mobileMenu} ${flexColumnCenterCenter}`}
            onClick={toggleMobileNav}
          >
            <Image src={MenuIcon} alt="menu-icon" className={menuIcon} />
          </div>
          <div className={sideNav} id="mobile-nav">
            <div className={mobileMenuItem}>Upcoming Sales</div>
            <div className={mobileMenuItem}>The Jumblog</div>
            <div className={mobileMenuItem}>FAQ</div>
            <div className={mobileMenuItem}>Get in Touch</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
