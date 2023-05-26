import React from "react";
import "../styles/Footer.css";
import icons from "../assets/icons/facebook-twitter-linkedin-icon-16-removebg-preview.png";

export default function Footer() {
  return (
    <div className="footer">
      <h2>SHION HOUSE</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        amet porro exercitationem iusto molestiae temporibus fuga, corporis
        provident ex reiciendis?
      </p>
      <div>
        <img src={icons} alt="" />
      </div>
    </div>
  );
}
