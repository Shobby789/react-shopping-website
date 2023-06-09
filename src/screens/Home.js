import React, { useContext } from "react";
import "../styles/Home.css";
import { products } from "../data/Data";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import SaleCard from "../components/SaleCard";
import { toast } from "react-toastify";
import Banner from "../components/Banner";

export default function Home() {
  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;

  const showAlert = () => {
    toast("No More Products! Go to Categories");
  };

  return (
    <>
      <MenuBar />
      {/* <Header /> */}
      <Banner />
      <div className="home">
        <h1>Latest Products</h1>
        <div className="product-container">
          {products.map((item) => {
            item.quantity = 1;
            return (
              <div className="item-box" key={item.id}>
                <img src={item.image} alt="itemImage" />
                <h4>{item.title}</h4>
                <h5>Rs. {parseInt(`${item.price}`)}</h5>
                <button
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
        <button className="browseMore" onClick={() => showAlert()}>
          Browse More
        </button>
      </div>
      <SaleCard />
      <Footer />
    </>
  );
}
