import React from "react";
import "../styles/Banner.css";
import img1 from "../assets/banner/pexels-anna-shvets-5325935.jpg";
import img2 from "../assets/banner/header.jpg";
import img3 from "../assets/banner/brooke-cagle-z1B9f48F5dc-unsplash.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Banner() {
  const images = [img1, img2, img3];
  return (
    <>
      <Slide>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>fashion changing always</span>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>fashion changing always</span>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}>
            <span>fashion changing always</span>
            <button>Shop Now</button>
          </div>
        </div>
      </Slide>
    </>
  );
}
