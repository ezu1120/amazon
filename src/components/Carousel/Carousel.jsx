import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "../../img/data";
import classes from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div className={classes.carouselContainer}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          return (
            <div className={classes.imageWrapper} key={index}>
              <img src={imageItemLink} alt={`Slide ${index + 1}`} />
              <div className={classes.hero__img}></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
