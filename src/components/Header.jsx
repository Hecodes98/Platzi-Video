/* eslint-disable comma-dangle */
import React from "react";

import { connect } from "react-redux";

import { logoutRequest } from "../actions";

import { Link } from "react-router-dom";

import gravatar from "../utils/gravatar";

import "../assets/styles/components/Header.scss";

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogOut = () => {
    props.logoutRequest({});
  };
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__img"
          src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png"
          alt=""
        />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img
            src={
              Object.keys(user).length > 0
                ? gravatar(user.email)
                : "https://img.icons8.com/wired/100/000000/cat-profile.png"
            }
            alt=""
          />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.email}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogOut}>
                Cerrar sesion
              </a>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Iniciar sesion</Link>
              </li>
              <li>
                <Link to="/register">Registrate</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
