import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BiHomeAlt2, BiLogIn, BiLogOut } from "react-icons/bi";

import "./../Styles/Utilities.scss";
import "./../Styles/Header.scss";
import { useSelector } from "react-redux";
import { Context, serverBackend } from "..";
import { toast } from "react-hot-toast";
import axios from "axios";
const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async (e) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${serverBackend}/Users/LogOut`, {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setIsAuthenticated(true);
    }
  };

  console.log("In Hedaer.jsx" + isAuthenticated);
  // console.log(isAuthenticated, setIsAuthenticated);
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="Navigation-Bar U-Display-Row U-Center-spaceBetween">
      <div
        className="Left U-Display-Row U-Center-Center"
        style={{ fontFamily: "IBM Plex Mono, monospace" }}
      >
        socket()
      </div>
      <div className="Right U-Display-Row U-Center-spaceEvenly">
        <div>
          <Link
            className="Style-Link"
            to={"/"}
            style={{
              textDecoration: "none",
              padding: "0 15px",
            }}
          >
            <BiHomeAlt2 />
          </Link>
        </div>
        <div className="Shopping-Cart">
          <Link
            className="Style-Link custom-Dialog-Box C"
            to={"/Cart"}
            style={{ textDecoration: "none" }}
          >
            <FiShoppingBag />
            <span className="Shopping-Counter Style-Link">
              {cartItems.length}
            </span>
          </Link>
        </div>
        <div
          style={{
            padding: " 0 15px",
            paddingRight: "0px",
            position: "relative",
          }}
        >
          {isAuthenticated ? (
            <Link
              className="Style-Link custom-Dialog-Box LO"
              disabled={loading}
              onClick={logoutHandler}
            >
              <BiLogOut />
            </Link>
          ) : (
            <Link className="Style-Link custom-Dialog-Box LI" to={"/Login"}>
              <BiLogIn />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
