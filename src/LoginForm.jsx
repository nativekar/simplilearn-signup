import React from "react";
import { Link } from "react-router-dom";
import { validateLogin as validate } from "./validateInfo";
import useForm from "./useLoginForm";
import "./Form.css";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Login using your credentials.</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Log in
        </button>
        <span className="form-input-login">
          Don't have an account? Signup <Link to="/">here</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
