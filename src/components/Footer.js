import React from "react";
import TwitterImg from "../assets/socials/twitter.png";
import InstagramImg from "../assets/socials/instagram.png";
import FacebookImg from "../assets/socials/facebook.png";
import LogoImg from "../assets/mainlogo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                <a href={LogoImg} target="_blank" rel="noreferrer">
                  <img
                    src={LogoImg}
                    width={30}
                    height={30}
                    style={{ borderRadius: 15 }}
                    alt=""
                  />
                </a>
              </a>
              <span className="mb-3 mb-md-0 text-warning">
                © 2023 Elite Emporium, Inc
              </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.twitter.com"
                >
                  <img src={TwitterImg} width={24} height={30} alt="" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.instagram.com"
                >
                  <img src={InstagramImg} width={24} height={30} alt="" />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="https://facebook.com">
                  <img src={FacebookImg} width={24} height={30} alt="" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
