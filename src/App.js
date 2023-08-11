import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";

import Cart from "./Components/Cart";
import DetailedProduct from "./Components/DetailedProduct";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import PatchProduct from "./Components/PatchProduct";
import PostProduct from "./Components/PostProduct";
import SignUp from "./Components/SignUp";

import Footer from "./Components/Footer";

import { Context, serverBackend } from "./index";
import darkModeImage from "./Assets/darkModeImage.png";
import lightModeImage from "./Assets/lightModeImage.png";
import "./Styles/App.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  document.body.className = darkMode ? "darkMode" : "lightMode";

  const { setPresentUser, setIsAuthenticated, setLoading } =
    useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverBackend}/Users/KnowMe`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        console.log(res);
        console.log(res.data);
        setPresentUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setPresentUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div>
        <button className="modeChangerButton" onClick={toggleDarkMode}>
          <img
            className="modeChangerImage"
            src={darkMode ? darkModeImage : lightModeImage}
            alt=""
          />
        </button>
        <Header />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/LogIn" element={<LogIn />} /> */}
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PostProduct" element={<PostProduct />} />
          <Route path="/PatchProduct" element={<PatchProduct />} />
          <Route path="/DetailedProduct/:id" element={<DetailedProduct />} />
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
