import "../styles/Navbar.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import CartIcon from "../assets/icons/basket-cart-icon.png";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;

  // firebase logout
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error occured.
        alert(error.message);
        console.log(error.message);
      });
  };

  return (
    <>
      <nav>
        <h2>shion house</h2>
        <div>
          <button onClick={() => navigate("/cart")}>
            <img src={CartIcon} alt="cartIcon" /> <span>{state.length}</span>
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
}
