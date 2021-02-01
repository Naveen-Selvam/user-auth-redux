import React, { useState } from "react";
import { startLoginUser } from "../action/user-action";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const displayError = useSelector((state) => state.user.errors);

  const errors = {};
  const { handleLogin } = props;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }; 

  const runValidation = () => {
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
      email: email,
      password: password,
    };
    runValidation();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(startLoginUser(data));

      setTimeout(() => {
        if (localStorage.getItem("token")) {
          handleLogin();
          props.history.push("/", "successfully LoggedIn");
          setEmail("");
          setPassword("");
        }
      }, 3000);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    setFormErrors({});
  };

  let registered = props.location.state;
  return (
    <div>
      <div>
        {registered && <h6>{registered}</h6>}
        {displayError && <h5>{displayError}</h5>}
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <button type="button" onClick={handleCancel}>
            cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
