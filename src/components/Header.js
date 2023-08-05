import React from "react";
import LogoImg from "../assets/mainlogo.png";
import { Link } from "react-router-dom";

import "./Header.css"

export default function Header(props) {
  return (
    <>
      <nav className="p-3 text-bg-dark sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            href={LogoImg}
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none navbar-brand"
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
          <button
            className="navbar-toggler collapsed bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-lg-start navbar-collapse collapse"
            id="navbarSupportedContent"
          >
            {/* <a
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
            </a> */}
            <ul
              className="nav col-12 col-lg-auto me-lg-auto mb-2 flex-row justify-content-center mb-md-0 navbar-nav me-auto mb-lg-0"
            >
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link px-2 text-${props.homeColor}`}
                  style={{ color: "yellow" }}
                >
                  Elite Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/emporium-products"
                  className={`nav-link px-2 text-${props.productColor}`}
                  style={{ color: "yellow" }}
                >
                  Browse Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/elite-best-sellers"
                  className={`nav-link px-2 text-${props.bestSellerColor}`}
                  style={{ color: "yellow" }}
                >
                  Our Best Sellers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/buy-elite-pro"
                  className={`nav-link px-2 text-${props.proColor}`}
                  style={{ color: "yellow" }}
                >
                  Purchase Pro
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-team"
                  className={`nav-link px-2 text-${props.aboutColor}`}
                  style={{ color: "yellow" }}
                >
                  About Our Team
                </Link>
              </li>
              <li className="nav-item">
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
            <div className="text-center">
              <Link to="/login-to-website" style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>
              <Link
                to="/register-for-account"
                style={{ textDecoration: "none" }}
              >
                <button type="button" className="btn btn-warning">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
