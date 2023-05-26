import React, { useState } from "react";
import "../styles/AddItem.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddItem(props) {
  const [item, setItem] = useState({
    Name: "",
    Address: "",
    PhoneNumber: "",
    Email: "",
    City: "",
  });
  const [itemImage, setItemImage] = useState("");

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItem((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("itemImage: " + itemImage);
  };

  const placeOrder = () => {
    toast.success("Order Placed Successfully");
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black", textAlign: "center" }}>
          Enter Your Details
        </h3>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Enter Your Name"
                value={item.Name}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <input
                type="number"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="Enter Your Phone Number"
                value={item.PhoneNumber}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Email Address"
                name="Email"
                id="Email"
                value={item.Email}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Enter Your Address"
                value={item.Address}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="City"
                id="City"
                placeholder="Enter City"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Place Order Now"
                onClick={() => placeOrder()}
              />
            </div>
          </form>
        </div>
        <button onClick={() => props.setTrigger(false)}>x</button>
      </div>
    </div>
  ) : (
    ""
  );
}
