import React from "react";
import "../css/maine.css";
import Footer from "../Components/Footer";

const ContactPage = () => {
  return (
    <>
      <div className="wraper-contact-page">
        <div className="contact-title-box">
          <h1 className="contact-title-box__maine-title animated flipInX delay-0.7s">
            Informajce o nas
          </h1>
        </div>

        <div className="map" id="map"></div>
        <div className="information">
          <h1 className="information__title ">Informajce o nas</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
