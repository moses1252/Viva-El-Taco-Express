import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

import T from "../../assets/pics/T.png";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={T} alt="g letter"></img>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon__img"></img>
        <p className="p__opensans">
          We are a small and upcoming Mexican franchise with a wide variety of
          mexican dishes to choose from. we plan to serve and feed our customers
          the mexican dished they come for.
        </p>

        <a
          href="https://www.facebook.com/Vivaeltacoexpress/about"
          target="blank"
          rel="noreferrer"
        >
          <button type="button" className="custom__button">
            Know more{" "}
          </button>
        </a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.thinpic} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon__img"></img>
        <p className="p__opensans">
          The first grand opening of Viva El Taco Express in 2018 was a success.
          We plan to grow and continue the chain to share our belovid recipes.
          Our second location, which opened in 2019, is doing fantastic due to
          the support of our customers.
        </p>

        <a
          href="https://www.facebook.com/Vivaeltacoexpress"
          target="blank"
          rel="noreferrer"
        >
          <button type="button" className="custom__button">
            Know more{" "}
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
