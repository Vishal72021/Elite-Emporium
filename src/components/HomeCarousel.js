import React from "react";
import ProductImg1 from "../assets/products/product1.jpg";
import ProductImg2 from "../assets/products/product2.jpg";
import ProductImg3 from "../assets/products/product3.jpg";
import ProductImg4 from "../assets/products/product4.jpg";
import ProductImg5 from "../assets/products/product5.jpg";

export default function ProductCarousel() {
  const styles = {
    "@media screen and (min-width: 320px) and (max-width: 768px)": {
      ".prod-img": {
        height: "295px",
      },
    },
  };
  return (
    <>
      <div className="bg-dark text-dark">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={3}
              aria-label="Slide 4"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={4}
              aria-label="Slide 5"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="w-100 d-flex justify-content-center">
                <img
                  className="prod-img" style={styles}
                  src={ProductImg1}
                  height={685}
                  alt="..."
                />
              </div>
              <div
                className="carousel-caption d-none d-md-block text-warning fw-bold text-bg-dark"
                style={{ opacity: 0.6 }}
              >
                <h5>Anker 737 Power Bank</h5>
                <p>
                  Anker’s 737 Power Bank can charge your laptop via a fast USB-C
                  connector with a maximum power output of 140 watts.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-center">
                <img
                  className="prod-img" style={styles}
                  src={ProductImg2}
                  height={685}
                  alt="..."
                />
              </div>
              <div
                className="carousel-caption d-none d-md-block text-warning fw-bold text-bg-dark"
                style={{ opacity: 0.6 }}
              >
                <h5>Peak Design Tech Pouch</h5>
                <p>
                  The Peak Design Tech Pouch is a stylish and exceptionally made
                  accessory that's a must-have for frequent travelers.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-center">
                <img
                  className="prod-img" style={styles}
                  src={ProductImg3}
                  height={685}
                  alt="..."
                />
              </div>
              <div
                className="carousel-caption d-none d-md-block text-warning fw-bold text-bg-dark"
                style={{ opacity: 0.6 }}
              >
                <h5>DANGO PRODUCTS D03 Dapper Bifold EDC Wallet</h5>
                <p>
                  This is an everyday accessory that effortlessly combines cool
                  design, exceptional craftsmanship, and perfect usability.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-center">
                <img
                  className="prod-img" style={styles}
                  src={ProductImg4}
                  height={685}
                  alt="..."
                />
              </div>
              <div
                className="carousel-caption d-none d-md-block text-warning fw-bold text-bg-dark"
                style={{ opacity: 0.6 }}
              >
                <h5>Phinistec Z6 Portable Music Player</h5>
                <p>
                  This MP3 player offers a sleek design, stellar audio
                  performance, fantastic battery life, expandable storage, and
                  convenient controls.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-center">
                <img
                  className="prod-img" style={styles}
                  src={ProductImg5}
                  height={685}
                  alt="..."
                />
              </div>
              <div
                className="carousel-caption d-none d-md-block text-warning fw-bold text-bg-dark"
                style={{ opacity: 0.6 }}
              >
                <h5>HOTO Flashlight Lite</h5>
                <p>
                  This offers an impossibly elegant aluminum build, incredible
                  versatility, excellent battery life, and a USB-C connector for
                  recharging it.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev bg-dark"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-dark"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
