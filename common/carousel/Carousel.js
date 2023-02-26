import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowIcon from "assets/icons/arrow-right-slider.svg";
import PrevArrowIcon from "assets/icons/arrow-left-slider.svg";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Carousel.module.scss";

function SamplePrevArrow(props) {
  const { onClick, imgSrc, imgAlt, className } = props;

  return (
    <Image src={imgSrc} alt={imgAlt} onClick={onClick} className={className} />
  );
}

function SampleNextArrow(props) {
  const { className, onClick, imgSrc, imgAlt } = props;
  return (
    <Image src={imgSrc} alt={imgAlt} onClick={onClick} className={className} />
  );
}

class UserSlider extends Component {
  render() {
    const { productPics, productBg, productBgColor } = this.props;
    const { carouselContainer, carouselImgContainer } = styles;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow imgSrc={NextArrowIcon} imgAlt="next-icon" />,
      prevArrow: <SamplePrevArrow imgSrc={PrevArrowIcon} imgAlt="prev-icon" />,
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
            <Image src={pic.src} alt="product-pic" width={500} height={500} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default UserSlider;