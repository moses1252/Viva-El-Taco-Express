import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />

      <div className="app__wrapper-content">
        <h1 className="headtext__cormorant">Find Us</h1>
        <p className="p__opensans">
          Viva El Taco Express, 5841 E Charleston Blvd Ste #290, Las Vegas, NV
          89142
        </p>

        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "1rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Sat: 8:00 am - 10:00 pm</p>
        <p className="p__opensans">Sun: Closed</p>
        <a
          href="https://www.google.com/search?q=viva%20el%20taco%20express&rlz=1C1CHBF_enUS968US968&oq=viva+el+taco+express&aqs=chrome.0.69i59j69i60l3.3041j0j15&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u22!2m2!21m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9&tbm=lcl&sxsrf=ALiCzsYgjHEe8nS7cI8TQq8vZatMb_0bZQ:1663233911197&rflfq=1&num=10&rldimm=1115559328409064126&lqi=ChR2aXZhIGVsIHRhY28gZXhwcmVzc0j5i_yPya2AgAhaJhAAEAEQAhADGAAYARgCGAMiFHZpdmEgZWwgdGFjbyBleHByZXNzkgESbWV4aWNhbl9yZXN0YXVyYW504AEA&phdesc=Imuh9VyzdnY&ved=2ahUKEwi089GTvZb6AhWcMEQIHUcNCwUQvS56BAgdEAE&sa=X&rlst=f#rlfi=hd:;si:7402012732287650136,l,ChR2aXZhIGVsIHRhY28gZXhwcmVzc0iSxOn6pq-AgAhaJhAAEAEQAhADGAAYARgCGAMiFHZpdmEgZWwgdGFjbyBleHByZXNzkgESbWV4aWNhbl9yZXN0YXVyYW504AEA,y,07y09lP3LwI;mv:[[36.1669408,-115.04097459999998],[36.001843,-115.14257039999998]]"
          target="blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
          >
            Visit Us
          </button>
        </a>
        <h1
          className="headtext__cormorant"
          style={({ marginBottom: "3rem" }, { marginTop: "3rem" })}
        >
          Find Us
        </h1>
        <p className="p__opensans">
          Viva El Taco Express, 9845 S Maryland Pkwy # B, Las Vegas, NV 89183
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Sat: 8:00 am - 11:00 pm</p>
        <p className="p__opensans">Sun: Closed</p>
      </div>

      <a
        href="https://www.google.com/search?q=viva%20el%20taco%20express&rlz=1C1CHBF_enUS968US968&oq=viva+el+taco+express&aqs=chrome.0.69i59j69i60l3.3041j0j15&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ALiCzsYgjHEe8nS7cI8TQq8vZatMb_0bZQ:1663233911197&rflfq=1&num=10&rldimm=1115559328409064126&lqi=ChR2aXZhIGVsIHRhY28gZXhwcmVzc0j5i_yPya2AgAhaJhAAEAEQAhADGAAYARgCGAMiFHZpdmEgZWwgdGFjbyBleHByZXNzkgESbWV4aWNhbl9yZXN0YXVyYW504AEA&phdesc=Imuh9VyzdnY&ved=2ahUKEwi089GTvZb6AhWcMEQIHUcNCwUQvS56BAgdEAE&sa=X&rlst=f#rlfi=hd:;si:1115559328409064126,l,ChR2aXZhIGVsIHRhY28gZXhwcmVzc0j5i_yPya2AgAhaJhAAEAEQAhADGAAYARgCGAMiFHZpdmEgZWwgdGFjbyBleHByZXNzkgESbWV4aWNhbl9yZXN0YXVyYW504AEA,y,Imuh9VyzdnY;mv:[[36.1669408,-115.04097459999998],[36.001843,-115.14257039999998]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u22!2m2!21m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9"
        target="blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.whitelogofix} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
