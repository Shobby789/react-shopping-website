import React, { useContext } from "react";
import "../styles/Checkout.css";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;

  return (
    <>
      <div className="checkout-page">
        <div className="checkoutCard">
          {state.length > 0 ? (
            <>
              {state.map((item) => {
                item.quantity = 1;
                return (
                  <div className="itemCard">
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    <h4>{item.price}</h4>
                    <h4>{item.quantity}</h4>
                  </div>
                );
              })}{" "}
            </>
          ) : (
            <h3 style={{ color: "black" }}>NO Items Added Yet</h3>
          )}
        </div>
      </div>
    </>
  );
}
