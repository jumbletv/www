import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowIcon from "assets/icons/arrow-right-slider.svg";
import PrevArrowIcon from "assets/icons/arrow-left-slider.svg";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Carousel.module.scss";

function CustomArrows(props) {
  const { onClick, imgSrc, imgAlt, className } = props;

  return (
    <Image src={imgSrc} alt={imgAlt} onClick={onClick} className={className} />
  );
}

export function ProductSlider(props) {
  const { productPics, productBg, productBgColor } = props;
  const { carouselContainer, carouselImgContainer } = styles;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrows imgSrc={NextArrowIcon} imgAlt="next-icon" />,
    prevArrow: <CustomArrows imgSrc={PrevArrowIcon} imgAlt="prev-icon" />,
  };

  return (
    <Slider
      {...settings}
      className={`${carouselContainer} ${productBgColor}`}
      style={{
        backgroundImage: `url(${productBg.src})`,
      }}
    >
      {productPics?.map(({ id, pic }) => (
        <div key={id} className={carouselImgContainer}>
          <Image src={pic} alt="product-pic" priority={id === 1} />
        </div>
      ))}
    </Slider>
  );
}
