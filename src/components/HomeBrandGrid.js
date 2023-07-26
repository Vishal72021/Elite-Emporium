import React from "react";
import AppleImg from "../assets/brands/apple.png";
import GoogleImg from "../assets/brands/google.png";
import MicrosoftImg from "../assets/brands/microsoft.png";
import LogoImg from "../assets/mainlogo.png";

export default function HomeBrandGrid() {
  return (
    <>
      <div className="px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom text-warning text-center">
          Brands We Feature
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${AppleImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3
                  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                  style={{ opacity: 0.6 }}
                >
                  Apple
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={LogoImg}
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${GoogleImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3
                  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                  style={{ opacity: 0.6 }}
                >
                  Google
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={LogoImg}
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${MicrosoftImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3
                  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                  style={{ opacity: 0.6 }}
                >
                  Microsoft
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={LogoImg}
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>Washington</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
