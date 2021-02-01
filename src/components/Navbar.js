import React, { useState } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import styled from "styled-components";
import Account from "./Account";
import MyNotes from "./MyNotes";
import Home from "./Home";

const LinkWrapper = styled.div`
  width: 100 px;
  height: 5rem;
  background-color: lightseagreen;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Navbar = (props) => {
  const [login, setLogin] = useState(localStorage.getItem("token") || false);

  const handleLogin = () => {
    setLogin(!login);
  };

  const handleLogout = () => {
    setLogin(false);
    localStorage.clear();
  };

  return (
    <div>
      <LinkWrapper>
        <Link className="link" to="/">
          Home
        </Link>
        {login ? (
          <div>
            <Link className="link" to="/account">
              Account
            </Link>
            <Link className="link" to="/mynotes">
              My Notes
            </Link>
            <Link className="link" onClick={handleLogout} to="/">
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link className="link" to="/register">
              Register
            </Link>
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
        )}
      </LinkWrapper>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} exact />
      <Route
        path="/login"
        exact
        render={(props) => <Login {...props} handleLogin={handleLogin} />}
      />
      {login ? (
        <div>
          <Route path="/account" exact component={Account} />
          <Route path="/mynotes" exact component={MyNotes} />{" "}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Navbar;
 