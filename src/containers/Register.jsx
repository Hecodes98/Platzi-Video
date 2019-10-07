/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { registerRequest } from "../actions";

import "../assets/styles/components/Register.scss";

const Register = props => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: ""
  });

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="inputLogin"
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            className="inputLogin"
            type="text"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            className="inputLogin"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
