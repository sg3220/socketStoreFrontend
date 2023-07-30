import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  return (
    <div className="Cover">
      <div className="Cart U-Display-Row">
        <main className="Main-Box U-Display-Row">
          {cartItems.length > 0 ? (
            cartItems.map((i) => (
              <CartItem
                vProductImage={i.vProductImage}
                vProductName={i.vProductName}
                vPrice={i.vPrice}
                qty={i.quantity}
                id={i.id}
                key={i.id}
                decrement={decrement}
                increment={increment}
                deleteHandler={deleteHandler}
              />
            ))
          ) : (
            <div className="Heading-Primary" style={{ color: "ffffff" }}>
              No Items In The Cart...Add One Now
            </div>
          )}
        </main>
        <aside className="Side-Box U-Display-Column">
          <div className="Bill-Box Heading-Primary">Sub Total: ₹{subTotal}</div>
          <div className="Bill-Box Heading-Primary">
            Shipping Charges: ₹{shipping}
          </div>
          <div className="Bill-Box Heading-Primary">Tax: ₹{tax}</div>
          <div className="Bill-Box Heading-Primary">Total: ₹{total}</div>
        </aside>
      </div>
    </div>
  );
};
const CartItem = ({
  vProductImage,
  vProductName,
  vPrice,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem U-Display-Row">
    <img src={vProductImage} alt={vProductName} />
    <article>
      <div style={{ fontWeight: "500" }}>{vProductName}</div>
      <div style={{ fontWeight: "500" }}>₹{vPrice}</div>
    </article>
    <div className="Controls U-Display-Row">
      <button
        className="Control-Button cartButton"
        style={{ borderRadius: "0", transition: "none" }}
        onClick={() => decrement(id)}
      >
        -
      </button>
      <div className="Control-Button">{qty}</div>
      <button
        className="Control-Button cartButton"
        style={{ borderRadius: "0", transition: "none" }}
        onClick={() => increment(id)}
      >
        +
      </button>
    </div>
    <AiFillDelete className="Dustbin" onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
