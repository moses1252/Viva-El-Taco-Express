import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          5841 E Charleston Blvd Ste #290, Las Vegas, NV 89142
        </p>
        <p className="p__opensans">702-545-0755</p>
        <p className="p__opensans">702-541-7081</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <h1
          className="title__headtext__cormorant"
          style={{ marginBottom: "2rem" }}
        >
          !Viva El Taco Express!
        </h1>
        <p className="p__opensans">
          &quot;Authentic mexican food that the family can enjoy&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/Vivaeltacoexpress"
            target="blank"
            rel="noreferrer"
          >
            <FiFacebook />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Saturday:</p>
        <p className="p__opensans">08:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2022 Viva El Taco Express. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
