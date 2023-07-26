import React from "react";
import CollageImg from "../assets/tech-collage.png";
import { Link } from "react-router-dom";

export default function ProductCollage() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={CollageImg}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              This is the variety of Products we have to offer
            </h1>
            <p className="lead">
              Unleash your shopping desires with our diverse emporium of
              products! From cutting-edge electronics and fashion-forward
              apparel to captivating home essentials and exquisite accessories,
              we've curated an awe-inspiring selection to cater to your every
              whim. Discover limitless possibilities and elevate your lifestyle
              with our unparalleled variety, all under one roof!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/emporium-products">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Browse More
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
