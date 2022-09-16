import React from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Facebook" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Take a look at what we have to offer.
        </p>

        <a
          href="https://www.facebook.com/Vivaeltacoexpress/photos"
          target="blank"
          rel="noreferrer"
        >
          <button type="button" className="custom__button">
            View More
          </button>
        </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.facebook_6,
            images.facebook_2,
            images.facebook_1,
            images.facebook_3,
            images.facebook_4,
            images.facebook_5,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <FiFacebook className="gallery__image-icon" />
              {/* <BsInstagram className="gallery__image-icon" /> */}
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
