/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { setFavorite, deleteFavorite } from "../actions";

import "../assets/styles/components/CarouselItem.scss";

import iconPlay from "../assets/static/icon-play.png";
import iconPlus from "../assets/static/icon-plus.png";
import iconRemove from "../assets/static/remove-icon.png";

const CarouselItem = props => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div className="carousel-item__details--wrapper">
          <div className="carousel-item__details--images">
            <Link to={`/player/${id}`}>
              <img src={iconPlay} alt="Play icon" />
            </Link>

            {isList ? (
              <img
                onClick={() => handleDeleteFavorite(id)}
                src={iconRemove}
                alt=""
              />
            ) : (
              <img onClick={handleSetFavorite} src={iconPlus} alt="" />
            )}
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  // eslint-disable-next-line comma-dangle
  duration: PropTypes.number
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};

export default connect(
  null,
  mapDispatchToProps
)(CarouselItem);
