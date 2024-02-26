import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            Welcome to Elite Emporium
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              "Welcome to our vibrant world of online shopping! Unleash the
              power of convenience and style with our cutting-edge ecommerce
              platform. Explore an extensive collection of trendy fashion,
              tech-savvy gadgets, and unique home essentials. From sleek designs
              to unbeatable deals, we've got it all. Embrace seamless shopping
              at your fingertips. Join the revolution today!"
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/emporium-products">
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                >
                  Browse Products
                </button>
              </Link>
              <Link to="/elite-best-sellers">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Browse Best Sellers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
