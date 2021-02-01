import React, { useState } from "react";
import { startRegisterUser } from "../action/user-action";
import { useDispatch } from "react-redux";
import validator from "validator";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const runValidation = () => {
    //username validation
    if (validator.isEmpty(name)) {
      errors.name = "username can't be empty";
    } else if (name.length < 5) {
      errors.name = "username must have atleast 5 characters";
    }

    // email validation
    if (validator.isEmpty(email)) {
      errors.email = "email can't be empty";
    } else if (!validator.isEmail(email)) {
      errors.email = "invalid email formate";
    }

    // password validation
    if (validator.isEmpty(password)) {
      errors.password = "password can't be empty";
    } else if (password.length < 8) {
      errors.password = "password must have atleast 8-128 characters";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: name,
      email: email,
      password: password,
    };

    runValidation();
    if (Object.keys(errors).length === 0) {
      dispatch(startRegisterUser(data));
      props.history.push("/login", "Registered Successfully");
      setName("");
      setEmail("");
      setPassword("");
    } else {
      setFormErrors(errors);
    }
  };

  const handleCancel = () => {
    setName("");
    setEmail("");
    setPassword("");
    setFormErrors({});
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        {formErrors.name && <h5>{formErrors.name}</h5>}
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email-ID"
        />
        {formErrors.email && <h5>{formErrors.email}</h5>}
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        {formErrors.password && <h5>{formErrors.password}</h5>}
        <br />

        <button type="submit">Register</button>
        <button type="button" onClick={handleCancel}>
          cancel
        </button>
        <br />
      </form>
    </div>
  );
};

export default Register;
