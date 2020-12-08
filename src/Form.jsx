import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(data) {
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
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
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess
            message="User registered successfully!"
            showLoginLink={true}
          />
        )}
      </div>
    </>
  );
};

export default Form;
