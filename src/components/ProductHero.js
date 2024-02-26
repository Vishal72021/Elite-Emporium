import React from "react";
import { Link } from "react-router-dom";

export default function ProductHero() {
  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Designed for Consumers</h1>
          <h3 className="fw-normal text-muted mb-3">
            Buy anything you want with Elite Emporium. Browse our newest and
            best products below.
          </h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <Link to='/' className="icon-link">
              Learn more
              <svg className="bi">
                <use xlinkHref="#chevron-right" />
              </svg>
            </Link>
            <Link className="icon-link" to="/elite-best-sellers">
              Buy
              <svg className="bi">
                <use xlinkHref="#chevron-right" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>
    </>
  );
}
