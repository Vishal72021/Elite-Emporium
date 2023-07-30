import React from "react";

import "./AboutCarousel.css";

export default function AboutCarousel(props) {
  return (
    <>
      <div
        id={`myCarousel-${props.carousel_number}`}
        className="carousel slide mb-6"
        data-bs-ride="carousel"
        data-bs-theme="light"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#myCarousel-${props.carousel_number}`}
            data-bs-slide-to={0}
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          />
          <button
            type="button"
            data-bs-target={`#myCarousel-${props.carousel_number}`}
            data-bs-slide-to={1}
            aria-label="Slide 2"
            className=""
          />
          <button
            type="button"
            data-bs-target={`#myCarousel-${props.carousel_number}`}
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className=""
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-item-next carousel-item-start">
            <img
              src={props.carousel_img1}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>{props.head1}</h1>
                <p className="opacity-75">{props.para1}</p>
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
              src={props.carousel_img2}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>{props.head2}</h1>
                <p>{props.para2}</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active carousel-item-start">
            <img
              src={props.carousel_img3}
              alt=""
              className="bd-placeholder-img d-flex w-100 h-100 mx-auto"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>{props.head3}</h1>
                <p>{props.para3}</p>
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
          data-bs-target={`#myCarousel-${props.carousel_number}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#myCarousel-${props.carousel_number}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
