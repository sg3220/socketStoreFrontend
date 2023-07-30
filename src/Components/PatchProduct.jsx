import React from "react";

const PatchProduct = () => {
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
          PATCH-PRODUCT-DETAILS
        </div>
        <form>
          <div className="Outer-Box-Select">
            <select className="Box-Select">
              <option value="">SELECT-A-FIELD</option>
              <option value="vManufaturerName">vManufaturerName</option>
              <option value="vProductName">vProductName</option>
              <option value="vPrice">vPrice</option>
              <option value="vQuantity">vQuantity</option>
              <option value="vUnit">vUnit</option>
              <option value="vSellerName">vSellerName</option>
              <option value="vCountryOfOrigin">vCountryOfOrigin</option>
              <option value="vShelfLife">vShelfLife</option>
            </select>
          </div>
          <input className="Form-Element Form-Input" placeholder="New-Value" />

          <button className="Form-Element Form-Button">PATCH</button>
        </form>
      </div>
    </div>
  );
};

export default PatchProduct;
