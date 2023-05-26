import "../styles/Men.css";
import { MenProducts } from "../data/Men";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Men() {
  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  return (
    <>
      <MenuBar />
      <div className="men">
        <h1>Men Clothes</h1>
        <div className="menProducts">
          {MenProducts.map((item) => {
            item.quantity = 1;
            return (
              <div className="men-card" key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <h5>Rs. {parseInt(`${item.price}`)}</h5>
                <button
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                  {/* <img src={cartIcon} alt="" /> */}
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
