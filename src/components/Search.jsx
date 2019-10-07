/* eslint-disable comma-dangle */
import React from "react";

import { connect } from "react-redux";

import { searchVideo } from "../actions";

import "../assets/styles/components/Search.scss";

const Search = props => {
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        className="main__input input"
        type="text"
        placeholder="Buscar..."
        onChange={() => props.searchVideo(event.target.value)}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
