import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import PostProduct from "./Components/PostProduct";
import PatchProduct from "./Components/PatchProduct";
import PopUp from "./Components/PopUp";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";

import darkModeImage from "./Assets/darkModeImage.png";
import lightModeImage from "./Assets/lightModeImage.png";
import "./Styles/App.scss";
import axios from "axios";
import { Context, serverBackend } from ".";

function App() {
  // const [hello, setHello] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const { setUser, setIsAuthenticated } = useContext(Context);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  document.body.className = darkMode ? "darkMode" : "lightMode";
  // const emptyobj = new Object();
  // const [data, setData] = useState("");
  // const getData = async () => {
  //   const emptyobj = await axios.get("http://localhost:4000/Bittu");
  //   setData(emptyobj.data);
  //   const hello = emptyobj.data[1].vProductName;
  //   console.log(hello);
  //   const helloData = emptyobj.data[1].vProductName;
  //   setHello(helloData); // Update the hello variable here
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  useEffect(() => {
    axios
      .get(`${serverBackend}/Users/Me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
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
          {/* <Route path="/Bittu" element={<Bittu message={hello} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PostProduct" element={<PostProduct />} />
          <Route path="/PatchProduct" element={<PatchProduct />} />
          <Route path="/PopUp" element={<PopUp />} />
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
