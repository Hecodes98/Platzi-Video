/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { loginRequest } from "../actions";

import "../assets/styles/components/Login.scss";

const Login = props => {
  const [form, setForm] = useState({
    email: ""
  });

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>Sign in</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            className="inputLogin"
            type="text"
            placeholder="E-mail"
            aria-label="Ingresa correo"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <input
            name="password"
            className="inputLogin"
            type="password"
            placeholder="Password"
            aria-label="Ingresa contraseña"
            onChange={handleChange}
          />
          <button className="button">Login</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" name="" id="cbox1" value="checkbox" />
              Remember me
            </label>
            <a href="/">I forgot my password</a>
          </div>
        </form>
        <div className="login__container--social-media">
          <div>
            <img
              src="https://img.icons8.com/nolan/64/000000/google-plus.png"
              alt="Google Icon"
            />
            Sign up with Google
          </div>
          <div>
            <img
              src="https://img.icons8.com/nolan/64/000000/twitter.png"
              alt="Twitter Icon"
            />
            Sign up with Twitter
          </div>
        </div>
        <p className="login__container--register">
          No tines ninguna cuenta
          <Link to="/register">Registrate</Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchProps = {
  loginRequest
};

export default connect(
  null,
  mapDispatchProps
)(Login);
