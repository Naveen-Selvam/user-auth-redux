import React from "react";

const Home = (props) => {
  let loggedIn = props.location.state;
  return (
    <div>
      {loggedIn && <h6>{props.location.state}</h6>}
      <h1>Home Component</h1>
    </div>
  );
};
 
export default Home;
 