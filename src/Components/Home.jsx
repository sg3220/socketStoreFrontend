import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { serverBackend } from "../index.js";

const Home = () => {
  const [vProducts, setvProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverBackend}/Products`, {
        // withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setvProducts(res.data.products);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  });

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
        {vProducts.map((i) => (
          <ProductCard
            key={i._id}
            vProductName={i.vProductName}
            vPrice={i.vPrice}
            vProductImage={i.vProductImage}
            id={i._id}
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
        ADD
      </button>
      <button className="cartButton" style={{ marginRight: "10px" }}>
        <Link
          className="Style-Link"
          style={{ color: "inherit" }}
          to={`/DetailedProduct/${id}`}
        >
          MORE-DETAILS
        </Link>
      </button>
    </div>
  </div>
);

export default Home;
