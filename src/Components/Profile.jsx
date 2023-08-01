import React, { useContext } from "react";
import { Context } from "../index";
import Loader from "./Loader";

const Profile = () => {
  const { isAuthenticated, loading, presentUser } = useContext(Context);
  console.log(presentUser);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{presentUser?.vName}</h1>
      <h1>{presentUser?.vEmail}</h1>
    </div>
  );
};

export default Profile;
