import React from "react";

import PropTypes from "prop-types";

import "../assets/styles/components/CarouselItem.scss";

import iconPlay from "../assets/static/icon-play.png";
import iconPlus from "../assets/static/icon-plus.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div className="carousel-item__details--wrapper">
        <div className="carousel-item__details--images">
          <img src={iconPlay} alt="" />
          <img src={iconPlus} alt="" />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  // eslint-disable-next-line comma-dangle
  duration: PropTypes.number
};

export default CarouselItem;
