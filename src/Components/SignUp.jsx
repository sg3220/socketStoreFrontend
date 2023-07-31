import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { Context, serverBackend } from "../index";

import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [vName, setvName] = useState("");
  const [vEmail, setvEmail] = useState("");
  const [vPassword, setvPassword] = useState("");
  const [vPasswordConfirm, setvPasswordConfirm] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(vName, vEmail, vPassword, vPasswordConfirm);
    try {
      const { data } = await axios.post(
        `${serverBackend}/Users/SignUp`,
        {
          vName,
          vEmail,
          vPassword,
          vPasswordConfirm,
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
      setLoading(false);
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
          join socket()
        </div>
        <form onSubmit={submitHandler}>
          <input
            className="Form-Element Form-Input"
            onChange={(e) => setvName(e.target.value)}
            placeholder="vName"
            required
            type="text"
          />
          <input
            className="Form-Element Form-Input"
            onChange={(e) => setvEmail(e.target.value)}
            placeholder="vEmail"
            required
            type="email"
          />
          <input
            className="Form-Element Form-Input"
            onChange={(e) => setvPassword(e.target.value)}
            placeholder="vPassword"
            required
            type="password"
          />
          <input
            className="Form-Element Form-Input"
            onChange={(e) => setvPasswordConfirm(e.target.value)}
            placeholder="vPasswordConfirm"
            required
            type="password"
          />

          <div
            className="U-Display-Row U-Center-spaceBetween"
            style={{ marginRight: "10px" }}
          >
            <button
              className={`Form-Element Form-Button ${
                loading ? "disabled-cursor" : ""
              }`}
              disabled={loading}
            >
              SIGN UP
            </button>
            <Link className="Style-Link" to={"/LogIn"}>
              Socket Member...LogIn Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
