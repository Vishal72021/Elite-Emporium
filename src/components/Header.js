import React from "react";
import LogoImg from "../assets/mainlogo.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header
        className="p-3 text-bg-dark sticky-top"
      >
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href={LogoImg}
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              src={LogoImg}
              alt=""
              className="bi me-2"
              width={40}
              height={40}
              role="img"
              style={{ borderRadius: 20 }}
            />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="/"
                className={`nav-link px-2 text-${props.homeColor}`}
                style={{ color: "yellow" }}
              >
                Elite Home
              </Link>
            </li>
            <li>
              <Link
                to="/emporium-products"
                className={`nav-link px-2 text-${props.productColor}`}
                style={{ color: "yellow" }}
              >
                Browse Products
              </Link>
            </li>
            <li>
              <Link
                to="/elite-best-sellers"
                className={`nav-link px-2 text-${props.bestSellerColor}`}
                style={{ color: "yellow" }}
              >
                Our Best Sellers
              </Link>
            </li>
            <li>
              <Link
                to="/buy-elite-pro"
                className={`nav-link px-2 text-${props.proColor}`}
                style={{ color: "yellow" }}
              >
                Purchase Pro
              </Link>
            </li>
            <li>
              <Link
                to="/about-team"
                className={`nav-link px-2 text-${props.aboutColor}`}
                style={{ color: "yellow" }}
              >
                About Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/our-contact"
                className={`nav-link px-2 text-${props.contactColor}`}
                style={{ color: "yellow" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="text-end">
            <Link to="/login-to-website" style={{ textDecoration: "none" }}>
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
            </Link>
            <Link to="/register-for-account" style={{ textDecoration: "none" }}>
              <button type="button" className="btn btn-warning">
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
