import React from "react";

const PostProduct = () => {
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
        <form>
          <div className="U-Display-Row U-Center-spaceEvenly">
            <div>
              <input
                className="Form-Element Form-Input"
                placeholder="vManufaturerName"
              />
              <input
                className="Form-Element Form-Input"
                placeholder="vProductName"
              />
              <input className="Form-Element Form-Input" placeholder="vPrice" />
              <input
                className="Form-Element Form-Input"
                placeholder="vQuantity"
              />
            </div>
            <div>
              <input className="Form-Element Form-Input" placeholder="vUnit" />
              <input
                className="Form-Element Form-Input"
                placeholder="vSellerName"
              />
              <input
                className="Form-Element Form-Input"
                placeholder="vCountryOfOrigin"
              />
              <input
                className="Form-Element Form-Input"
                placeholder="vShelfLife"
              />
            </div>
          </div>

          <button className="Form-Element Form-Button">POST</button>
        </form>
      </div>
    </div>
  );
};

export default PostProduct;
