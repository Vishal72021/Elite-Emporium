import React from "react";
import Carousel1 from "../assets/carousels/carousel1.jpg";
import Carousel2 from "../assets/carousels/carousel2.jpg";
import Carousel3 from "../assets/carousels/carousel3.jpg";
import Carousel4 from "../assets/carousels/carousel4.jpg";
import Carousel5 from "../assets/carousels/carousel5.jpg";
import Carousel6 from "../assets/carousels/carousel6.jpg";
import Carousel7 from "../assets/carousels/carousel7.jpg";
import Carousel8 from "../assets/carousels/carousel8.jpg";
import Carousel9 from "../assets/carousels/carousel9.jpg";

import "./AboutCarousel.css";

export default function AboutCarousel() {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={3}
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={4}
            aria-label="Slide 2"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={5}
            aria-label="Slide 3"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={6}
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={7}
            aria-label="Slide 2"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={8}
            aria-label="Slide 3"
            className=""
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Carousel1}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>WebWizards</h1>
                <p className="opacity-75">
                  Pioneering Project Management Excellence
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel2}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>CodeCrafters</h1>
                <p>Mastering Digital Project Alchemy</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel3}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>PixelPro</h1>
                <p>Architecting Dreams, Delivering Realities</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel4}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Pixel Pioneers</h1>
                <p className="opacity-75">
                  Crafting Captivating Digital Experiences for Tomorrow's Web
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel5}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>Code Magicians</h1>
                <p>
                  Unleashing Interactive Wizardry with Cutting-Edge Web Designs
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel6}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Design Mavericks</h1>
                <p>
                  Igniting Inspiration through Bold and Bespoke Web Solutions
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel7}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Flawless Web Warden</h1>
                <p className="opacity-75">
                  Unleash Quality with Our Expert Web Testing Wizards!
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel8}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>Rapid Click & Check</h1>
                <p>Lightning-Fast Web Testing for Seamless User Experiences!</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Carousel9}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Bug Bash Brigade</h1>
                <p>Crush Glitches and Bugs with Supreme Web Testing Prowess!</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
