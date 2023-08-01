import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

import { Context, serverBackend } from "../index";

const PostProduct = () => {
  const [vManufacturerName, setvManufacturerName] = useState("");

  
  const [vProductName, setvProductName] = useState("");
  
  const [vPrice, setvPrice] = useState("");
  
  const [vQuantity, setvQuantity] = useState("");
  
  const [vUnit, setvUnit] = useState("");
  
  const [vFrontImage, setvFrontImage] = useState("");
  
  const [vBackImage, setvBackImage] = useState("");
  
  const [vSellerName, setvSellerName] = useState("");
  
  const [vCountryOfOrigin, setvCountryOfOrigin] = useState("");
  
  const [vShelfLife, setvShelfLife] = useState("");

  const { loading, setLoading } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(
      vManufacturerName,
      vProductName,
      vPrice,
      vQuantity,
      vUnit,
      vFrontImage,
      vBackImage,
      vSellerName,
      vCountryOfOrigin,
      vShelfLife
    );

    try {
      const { data } = await axios.post(
        `${serverBackend}/Products/PostProduct`,
        {
          vManufacturerName,
          vProductName,
          vPrice,
          vQuantity,
          vUnit,
          vFrontImage,
          vBackImage,
          vSellerName,
          vCountryOfOrigin,
          vShelfLife,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: true,
        }
      );
      setvManufacturerName("");
      setvProductName("");
      setvPrice("");
      setvQuantity("");
      setvUnit("");
      setvFrontImage("");
      setvBackImage("");
      setvSellerName("");
      setvCountryOfOrigin("");
      setvShelfLife("");
      toast.success(data.vStatus);
      setLoading(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setLoading(false);
    }
  };
  
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
          POST-A-PRODUCT
        </div>
        <form onSubmit={submitHandler}>
          <div className="U-Display-Row U-Center-spaceEvenly">
            <div>
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvManufacturerName(e.target.value)}
                placeholder="vManufacturerName"
                required
                type="text"
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvProductName(e.target.value)}
                placeholder="vProductName"
                required
                type="text"
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvPrice(e.target.value)}
                placeholder="vPrice"
                required
                type="number"
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvQuantity(e.target.value)}
                placeholder="vQuantity"
                required
                type="number"
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvUnit(e.target.value)}
                placeholder="vUnit(default: g)"
                type="text"
              />
            </div>
            <div>
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvFrontImage(e.target.value)}
                placeholder="vFrontImage(default: g)"
                required
                type="text"
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvBackImage(e.target.value)}
                placeholder="vBackImage(default: g)"
                type="text"
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvSellerName(e.target.value)}
                placeholder="vSellerName"
                type="text"
                required
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvCountryOfOrigin(e.target.value)}
                placeholder="vCountryOfOrigin(default: India)"
                type="text"
              />
              <input
                className="Form-Element Form-Input"
                onChange={(e) => setvShelfLife(e.target.value)}
                placeholder="vShelfLife"
                type="number"
              />
            </div>
          </div>

          <button
            className={`Form-Element Form-Button ${
              loading ? "disabled-cursor" : ""
            }`}
            disabled={loading}
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostProduct;
