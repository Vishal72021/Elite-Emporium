import React from "react";

export default function BestSellerRow(props) {
  return (
    <>
      <div className={`px-4 py-5 bg-${props.bgcolor}`} id="custom-cards">
        <h2 className={`pb-2 border-bottom text-${props.color}`}>
          {props.headline}
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(images/bestsellers/${props.image1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-bg-secondary text-white text-shadow-1" style={{opacity: .7}}>
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {props.title1}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={props.logo}
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
                    <small>{props.category1}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>{props.timestamp1}</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(images/bestsellers/${props.image2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-bg-secondary text-white text-shadow-1" style={{opacity: .7}}>
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {props.title2}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={props.logo}
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
                    <small>{props.category2}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>{props.timestamp2}</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(images/bestsellers/${props.image3})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-bg-secondary text-white text-shadow-1" style={{opacity: .7}}>
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {props.title3}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={props.logo}
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
                    <small>{props.category3}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>{props.timestamp3}</small>
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
