import React from "react";
import image01 from "./../Assets/image04.jpg";
import image02 from "./../Assets/image05.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const PopUp = () => {
  return (
    <div className="U-Display-Row U-Center-Center">
      <div className="U-Display-Row U-Center-Center PopUp">
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
              src={image01}
              style={{ height: "350px", width: "350px" }}
              alt=""
            />
            <img
              src={image02}
              style={{ height: "350px", width: "350px" }}
              alt=""
            />
          </Carousel>
        </div>

        <div
          className="Product U-Display-Column"
          style={{ height: "auto", padding: "20px", border: "none" }}
        >
          <div
            className="Heading-Primary"
            style={{ margin: "5px", marginBottom: "0px" }}
          >
            Biscuit
          </div>
          <div
            className="Heading-Secondary"
            style={{ margin: "5px", marginTop: "0px" }}
          >
            by Haldiram
          </div>
          <div style={{ margin: "5px" }}>
            <span className="Heading-Secondary" style={{ fontWeight: 700 }}>
              PRICE:
            </span>
            <span className="Heading-Secondary" style={{ marginLeft: "10px" }}>
              ₹50
            </span>
          </div>

          <div style={{ margin: "5px" }}>
            <span className="Heading-Secondary" style={{ fontWeight: 700 }}>
              QUANTITY:
            </span>
            <span className="Heading-Secondary" style={{ marginLeft: "10px" }}>
              175g
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
            Seller Name: Ghosh Retails Private Limited, Country Of Origin:
            India, The Shelf Life Of The Product Is: 180 Days, From The Date Of
            Manufacture/Packed By.
          </div>

          <button
            style={{ margin: "5px" }}
            className="cartButton"
            // onClick={() =>
            //   handler({ id, vProductImage, vProductName, vPrice, quantity: 1 })
            // }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
