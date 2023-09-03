import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";

import { serverBackend } from "../index.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DetailedProduct = () => {
  const [vProducts, setvProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${serverBackend}/Products/${id}`, {})
      .then((res) => {
        setvProducts(res.data.vData);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }, [id]);

  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className="Cover">
      <div className="Home U-Display-Row U-Center-spaceEvenly">
        {vProducts ? (
          <ProductCard
            key={vProducts._id}
            vProductName={vProducts.vProductName}
            vManufacturerName={vProducts.vManufacturerName}
            vPrice={vProducts.vPrice}
            vFrontImage={vProducts.vFrontImage}
            vBackImage={vProducts.vBackImage}
            vQuantity={vProducts.vQunatity}
            vUnit={vProducts.vUnit}
            vSellerName={vProducts.vSellerName}
            vShelfLife={vProducts.vShelfLife}
            vCountryOfOrigin={vProducts.vCountryOfOrigin}
            id={vProducts._id}
            handler={addToCartHandler}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({
  id,
  vProductName,
  vManufacturerName,
  vFrontImage,
  vBackImage,
  vPrice,
  vQuantity,
  vUnit,
  vSellerName,
  vShelfLife,
  vCountryOfOrigin,
  handler,
}) => (
  <div className="detailedProduct">
    <div className="PopUp">
      <div style={{ height: "350px", width: "350px" }}>
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          showThumbs={false}
          style={{ height: "350px", width: "350px" }}
        >
          <img
            src={vFrontImage}
            style={{ height: "350px", width: "350px" }}
            alt=""
          />
          <img
            src={vBackImage}
            style={{ height: "350px", width: "350px" }}
            alt=""
          />
        </Carousel>
      </div>

      <div
        className="Product U-Display-Column"
        style={{
          width: "350px",
          height: "auto",
          padding: "20px",
          border: "none",
        }}
      >
        <div
          className="Heading-Primary"
          style={{ margin: "5px", marginBottom: "0px" }}
        >
          {vProductName}
        </div>
        <div
          className="Heading-Secondary"
          style={{ margin: "5px", marginTop: "0px" }}
        >
          {vManufacturerName}
        </div>
        <div style={{ margin: "5px" }}>
          <span className="Heading-Secondary" style={{ fontWeight: 700 }}>
            PRICE:
          </span>
          <span className="Heading-Secondary" style={{ marginLeft: "10px" }}>
            {vPrice}
          </span>
        </div>

        <div style={{ margin: "5px" }}>
          <span className="Heading-Secondary" style={{ fontWeight: 700 }}>
            QUANTITY:
          </span>
          <span className="Heading-Secondary" style={{ marginLeft: "10px" }}>
            {vQuantity}
            {vUnit}
          </span>
        </div>

        <div
          className="Heading-Secondary"
          style={{ fontWeight: 700, margin: "5px", marginBottom: "0px" }}
        >
          INFORMATION:
        </div>
        <div
          className="Heading-Secondary"
          style={{ margin: "5px", marginTop: "0px" }}
        >
          Seller Name: {vSellerName}, Country Of Origin:
          {vCountryOfOrigin}, The Shelf Life Of The Product Is: {vShelfLife}{" "}
          Day(s), From The Date Of Manufacture/Packed By.
        </div>

        <button
          className="cartButton"
          onClick={() =>
            handler({ id, vFrontImage, vProductName, vPrice, quantity: 1 })
          }
        >
          ADD
        </button>
      </div>
    </div>
  </div>
);

export default DetailedProduct;
