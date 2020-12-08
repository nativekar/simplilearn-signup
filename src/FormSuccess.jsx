import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const FormSuccess = ({ message, showLoginLink }) => {
  return (
    <div className="form-content-right" style={{ textAlign: "center" }}>
      <h1 className="form-success">{message}</h1>
      {showLoginLink && (
        <div
          className="form-input-login"
          style={{ marginTop: 20, width: "100%" }}
        >
          <Link to="/login">Click here</Link> to login
        </div>
      )}
    </div>
  );
};

export default FormSuccess;
