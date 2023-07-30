import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { serverBackend } from "../index.js";
import image01 from "./../Assets/image01.jpg";
import { Link } from "react-router-dom";
import image02 from "./../Assets/image02.jpeg";
const Home = () => {
  const [products, setProducts] = useState([]);
  const productList = [
    {
      vProductName: "Cookies Heaven Atta",
      vPrice: 70,
      vProductImage: image01,
      id: "64c23b33ac02c2340caebfdd",
    },
    {
      vProductName: "Cookies Heaven Atta",
      vPrice: 70,
      vProductImage: image01,
      id: "64c23b33ac02c2340caebfde",
    },
    {
      vProductName: "Cookies Heaven Atta",
      vPrice: 70,
      vProductImage: image01,
      id: "64c23b33ac02c2340caebfdf",
    },
    {
      vProductName: "Cookies Heaven Atta",
      vPrice: 70,
      vProductImage: image01,
      id: "64c23b33ac02c2340caebfdg",
    },
    {
      vProductName: "Pasteurized Butter",
      vPrice: 56,
      vProductImage: image02,
      id: "64c2956ea5f21004054ecf79",
    },
    {
      vProductName: "Pasteurized Butter",
      vPrice: 56,
      vProductImage: image02,
      id: "64c2956ea5f21004054ecf70",
    },
    {
      vProductName: "Pasteurized Butter",
      vPrice: 56,
      vProductImage: image02,
      id: "64c2956ea5f21004054ecf71",
    },
  ];

  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added To Cart");
  };
  return (
    <div className="Cover">
      <div className="Home U-Display-Row U-Center-spaceEvenly">
        {productList.map((i) => (
          <ProductCard
            key={i.id}
            vProductName={i.vProductName}
            vPrice={i.vPrice}
            vProductImage={i.vProductImage}
            id={i.id}
            handler={addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ id, vProductName, vPrice, vProductImage, handler }) => (
  <div className="Product U-Display-Column">
    <div>
      <img src={vProductImage} alt={vProductName} />
    </div>
    <div className="Heading-Primary">{vProductName}</div>
    <div className="Heading-Secondary">₹{vPrice}</div>
    <div className="U-Display-Row Button-Array">
      <button
        className="cartButton"
        onClick={() =>
          handler({ id, vProductImage, vProductName, vPrice, quantity: 1 })
        }
      >
        Add To Cart
      </button>
      <button className="cartButton" style={{ marginRight: "10px" }}>
        <Link className="Style-Link" style={{ color: "inherit" }} to={"/PopUp"}>
          More Details
        </Link>
      </button>
    </div>
  </div>
);

export default Home;
