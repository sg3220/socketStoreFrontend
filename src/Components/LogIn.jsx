import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context, serverBackend } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";

const LogIn = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const [vEmail, setvEmail] = useState("");
  const [vPassword, setvPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(vEmail, vPassword);
    try {
      const { data } = await axios.post(
        `${serverBackend}/Users/LogIn`,
        {
          vEmail,
          vPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.vStatus);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="U-Display-Column U-Center-Center Cover">
      <div className="Outer-Box">
        <div
          className="Form-Element Form-Heading"
          style={{
            width: "90%",
            textAlign: "center",
            fontFamily: "IBM Plex Mono, monospace",
          }}
        >
          welcome back
        </div>
        <form onSubmit={submitHandler}>
          <input
            className="Form-Element Form-Input"
            onChange={(e) => setvEmail(e.target.value)}
            placeholder="vEmail"
            type="email"
          />
          <input
            className="Form-Element Form-Input"
            onChange={(e) => setvPassword(e.target.value)}
            placeholder="vPassword"
            type="password"
          />
          <div
            className="U-Display-Row U-Center-spaceBetween"
            style={{ marginRight: "10px" }}
          >
            <button
              className={`Form-Element Form-Button ${
                loading ? "disabled-cursor" : ""
              } `}
              disabled={loading}
            >
              LOG IN
            </button>
            <Link className="Style-Link" to={"/SignUp"}>
              Or SignUp...
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
