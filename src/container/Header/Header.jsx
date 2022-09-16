import React from "react";

import { images } from "../../constants";
import welcome from "../../assets/pics/yaya-welcome.jpg";
import shrimp from "../../assets/pics/yaya-welcome-shrimp.png";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Authentic" />
      <h1 className="app__header-h1">The Best Tacos & Mexican Food</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Our mission is to deliver a flavorful plate to all our customers.
      </p>
      <a href="#menu">
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={shrimp} alt="header img" />
    </div>
  </div>
);

export default Header;
