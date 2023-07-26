import React from "react";

export default function AboutRowFeaturette(props) {
  return (
    <>
      <div className="row featurette">
        <div className={`col-md-7 order-md-${props.order1}`}>
          <h2 className="featurette-heading fw-normal lh-1">
            {props.head}
            <span className="text-body-secondary">{props.span}</span>
          </h2>
          <p className="lead">{props.para}</p>
        </div>
        <div className={`col-md-5 order-md-${props.order2}`}>
          <img
            src={props.avatar}
            alt="avatar"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
