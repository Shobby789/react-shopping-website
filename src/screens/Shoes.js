import { useContext } from "react";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import { CartContext } from "../context/CartContext";
import { shoes } from "../data/Shoes";
import "../styles/Shoes.css";

export default function Shoes() {
  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  return (
    <>
      <MenuBar />
      <div className="shoes">
        <h1>Shoes</h1>
        <div className="shoes-container">
          {shoes.map((item) => {
            item.quantity = 1;
            return (
              <div className="shoes-card" key={item.id}>
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
