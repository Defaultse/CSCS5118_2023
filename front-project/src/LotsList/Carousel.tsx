import React, { ReactElement, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

export default function Carousel(): ReactElement {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.nbcnews-fp-1200-630.jpg"
            alt="First slide"
            onClick={() => window.location.replace("/recipes")}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Cook'n'sell</h5>
            <p>Click to load the recipes page</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/cooking-yocuta-banner.jpg?h=539c1c95&itok=TVANdbuu"
            alt="Second slide"
            onClick={() => window.location.replace("/recipes")}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>New recipes everyday!</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.nbcnews-fp-1200-630.jpg"
            alt="Third slide"
            onClick={() => window.location.replace("/recipes")}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Free recipes!</h5>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
