import React, { useState } from "react";
import "./Form.css";
import LoginForm from "./LoginForm";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState({ error: false });

  function submitForm(data) {
    console.log("login data", data);

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data);
          throw data;
        }
        console.log("Success:", data);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <LoginForm submitForm={submitForm} />
        ) : (
          <FormSuccess message="Login successfull" />
        )}

        {error && error.error && alert(error.message)}
      </div>
    </>
  );
};

export default Form;
