import React from "react";

export default function ProductCard(props) {
  return (
    <>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div
          className={`text-bg-${props.bg1color} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}
        >
          <div className="my-3 py-3">
            <h2 className="display-5">{props.heading1}</h2>
            <p className="lead">{props.subheading1}</p>
          </div>
          <div
            className={`bg-${props.card1color} shadow-sm mx-auto`}
            style={{
              width: "80%",
              height: 300,
              borderRadius: "21px 21px 0 0",
            }}
          >
            <img src={props.image1} alt="" height={300} width={'80%'} />
          </div>
        </div>
        <div
          className={`text-bg-${props.bg2color} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}
        >
          <div className="my-3 py-3">
            <h2 className="display-5">{props.heading2}</h2>
            <p className="lead">{props.subheading2}</p>
          </div>
          <div
            className={`bg-${props.card2color} shadow-sm mx-auto`}
            style={{
              width: "80%",
              height: 300,
              borderRadius: "21px 21px 0 0",
            }}
          >
            <img src={props.image2} alt="" height={300} width={'80%'} />
          </div>
        </div>
      </div>
    </>
  );
}
