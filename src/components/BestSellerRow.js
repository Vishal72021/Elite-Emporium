import React from "react";
import MainLogo from "../assets/mainlogo.png"
import BestSeller1 from "../assets/bestsellers/bestseller1.png";
import BestSeller2 from "../assets/bestsellers/bestseller2.png";
import BestSeller3 from "../assets/bestsellers/bestseller3.png";
import BestSeller4 from "../assets/bestsellers/bestseller4.png";
import BestSeller5 from "../assets/bestsellers/bestseller5.png";
import BestSeller6 from "../assets/bestsellers/bestseller6.png";
import BestSeller7 from "../assets/bestsellers/bestseller7.png";
import BestSeller8 from "../assets/bestsellers/bestseller8.png";
import BestSeller9 from "../assets/bestsellers/bestseller9.png";
import BestSeller10 from "../assets/bestsellers/bestseller10.png";
import BestSeller11 from "../assets/bestsellers/bestseller11.png";
import BestSeller12 from "../assets/bestsellers/bestseller12.png";

export default function BestSellerRow(props) {
  return (
    <>
      <div className={`px-4 py-5 bg-${props.bgcolor}`} id="custom-cards">
        <h2 className={`pb-2 border-bottom text-${props.color}`}>
          {props.group==='1'?"SmartPhones and Earbuds":props.group==='2'?"Smart Watches, Wearables and Tablets":props.group==='3'?"Laptops, TVs and Gaming KeyBoarsds":"Gaming Headsets, Mouse and Robot Cleaners"}
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${
                  props.group === "1"
                    ? BestSeller1
                    : props.group === "2"
                    ? BestSeller4
                    : props.group === "3"
                    ? BestSeller7
                    : BestSeller10
                })`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {props.group === "1"
                    ? "Apple iPhone 14 Pro Max"
                    : props.group === "2"
                    ? "Apple Watch Ultra"
                    : props.group === "3"
                    ? "Apple Macbook Air M2"
                    : "Drop + EPOS PC38X Gaming Headset"}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={MainLogo}
                      alt="logo"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>Tech Gadgets</small>
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
                backgroundImage: `url(${
                  props.group === "1"
                    ? BestSeller2
                    : props.group === "2"
                    ? BestSeller5
                    : props.group === "3"
                    ? BestSeller8
                    : BestSeller11
                })`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {props.group === "1"
                    ? "Nothing Phone 1"
                    : props.group === "2"
                    ? "Oura Ring Gen 3 Horizon"
                    : props.group === "3"
                    ? "Samsung Neo QLED 8K QN800B TV"
                    : "Logitech MX Master 3S"}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={MainLogo}
                      alt="logo"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>Tech Gadgets</small>
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
                backgroundImage: `url(${
                  props.group === "1"
                    ? BestSeller3
                    : props.group === "2"
                    ? BestSeller6
                    : props.group === "3"
                    ? BestSeller9
                    : BestSeller12
                })`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {props.group === "1"
                    ? "Bose QuietComfort II Earbuds"
                    : props.group === "2"
                    ? "Samsung Galaxy Tab S8 Plus"
                    : props.group === "3"
                    ? "Wooting 60HE Gaming Keyboard"
                    : "Roomba j7+"}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={MainLogo}
                      alt="logo"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>Tech Gadgets</small>
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
