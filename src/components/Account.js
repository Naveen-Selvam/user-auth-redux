import React, { useEffect } from "react";
import { startGetAccount } from "../action/account-action";
import { useDispatch, useSelector } from "react-redux";

const Account = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAccount());
  }, []);
 
  const user = useSelector((state) => state.user);

  return (
    <div>
      (
      <div style={{ textAlign: "center" }}>
        <h1>Account Details</h1>
        <div style={{ paddingTop: "5rem" }}>
          <h2>Name - {user?.username}</h2>
          <h2>Email - {user?.email}</h2>
          <h2>Created At - {user?.createdAt?.slice(0, 10)} </h2>
        </div>
      </div>
      )
    </div>
  );
};

export default Account;
