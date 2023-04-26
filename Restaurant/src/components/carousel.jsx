import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import css from "../styles/carousel.module.css";

const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive} className={css.container}>
        <div>
          <article> Text </article>
          <figure></figure>
          <section> Name </section>
        </div>
        <div>
          <article> Text </article>
          <figure></figure>
          <section> Name </section>
        </div>
        <div>
          {" "}
          <article> Text </article>
          <figure></figure>
          <section> Name </section>
        </div>
        <div>
          {" "}
          <article> Text </article>
          <figure></figure>
          <section> Name </section>
        </div>
        <div>
          {" "}
          <article> Text </article>
          <figure></figure>
          <section> Name </section>
        </div>
        <div>
          {" "}
          <article> Text </article>
          <figure></figure>
          <section> Name </section>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
