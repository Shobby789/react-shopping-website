import React, { useContext, useState } from "react";
import "../styles/Cart.css";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import trashIcon from "../assets/icons/Editing-Delete-icon.png";
import AddItem from "../components/AddItem";

export default function Cart() {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  console.log("state:", state);
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <MenuBar />
      <div className="cartHeader"></div>
      <div className="cart-page">
        <div className="cart-container">
          {state.length > 0 ? (
            <>
              {state.map((item) => {
                return (
                  <div className="selected-item" key={item.id}>
                    <img src={item.image} alt="" />
                    <div>
                      <h4>{item.title}</h4>
                    </div>
                    <div>
                      <h4>{item.quantity * item.price}</h4>
                    </div>
                    <div className="quantity">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                      >
                        +
                      </button>
                    </div>
                    <h2
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                      className="cancel"
                    >
                      <img src={trashIcon} alt="" id="delete" />
                    </h2>
                  </div>
                );
              })}
            </>
          ) : (
            <h2>No Items Are Added Yet</h2>
          )}
        </div>

        {/* subtotal */}
        <div className="sub-total">
          <h3>Your Cart</h3>
          <div className="bill">
            <p>Subtotal</p>
            {state.length > 0 && <p>Rs. {total}</p>}
          </div>
          <div className="bill">
            <p>Delivery Charges</p>
            <p>Rs. 20.00</p>
          </div>
          <div className="bill">
            <p>Total</p>
            {state.length > 0 && <p>Rs. {total + 20}</p>}
          </div>

          <button onClick={() => setShowForm(true)}>Place Order</button>
          {/* <button onClick={() => navigate("/checkout")}>Place Order</button> */}
        </div>
      </div>
      <div>
        <AddItem trigger={showForm} setTrigger={setShowForm} />
      </div>
      <Footer />
    </>
  );
}

export const Checkout = (props) => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  return props.trigger ? (
    <>
      <div>
        <h2>Checkout</h2>
        <div className="checkout-box">
          {state.length > 0 ? (
            <>
              {state.map((item) => {
                return (
                  <div key={item.id} className="checkoutItem">
                    <img src={item.image} alt="ItemImage" />
                    <h4>{item.title}</h4>
                    <button>
                      <img src={trashIcon} alt="trashIcon" />
                    </button>
                  </div>
                );
              })}
            </>
          ) : (
            <h2>No Items Added Yet</h2>
          )}
        </div>
      </div>
      <button onClick={() => props.setTrigger(false)}>x</button>
    </>
  ) : (
    ""
  );
};
