import "../styles/Women.css";
import { WomenClothes } from "../data/Women";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Women() {
  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  return (
    <>
      <MenuBar />
      <div className="women">
        <h1>Women' Clothing</h1>
        <div className="women-container">
          {WomenClothes.map((item) => {
            item.quantity = 1;
            return (
              <div className="women-card" key={item.id}>
                <img src={item.image} alt="" />
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
      </div>
      <Footer />
    </>
  );
}
