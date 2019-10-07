/* eslint-disable react/destructuring-assignment */
/* eslint-disable comma-dangle */
import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { getVideoSource } from "../actions";

import "../assets/styles/components/Player.scss";

const Player = props => {
  const { id } = props.match.params;

  const { playing } = props;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  if (playing === null) {
    return <h1>Cargando</h1>;
  }

  const hasPlaying = Object.keys(props.playing).length > 0;
  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button onClick={() => props.history.goBack()} type="button">
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = {
  getVideoSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
