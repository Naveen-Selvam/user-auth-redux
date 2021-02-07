import React from "react";
import img1 from "../pics/img1.png";

const Home = (props) => {
  let loggedIn = props.location.state;
  return (
    <div>
      {loggedIn && <h6>{props.location.state}</h6>}
      <h1>User - Authentication</h1>

      <img
        src={img1}
        style={{ marginLeft: "4.5rem" }}
        width="90%"
        height="515px"
      />
    </div>
  );
};

export default Home;
