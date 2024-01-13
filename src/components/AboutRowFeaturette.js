import React from "react";

export default function AboutRowFeaturette(props) {
  return (
    <>
      <div className="row featurette align-items-center">
        <div className={`col-md-7 order-md-${props.order1}`}>
          <h2 className="featurette-heading fw-normal lh-1">
            {props.featurette_title}
            <span className="text-body-secondary">{props.featurette_span}</span>
          </h2>
          <p className="lead">{props.featurette_description}</p>
        </div>
        <div className={`col-md-5 order-md-${props.order2}`}>
          <img
            src={`images/avatars/${props.featurette_avatar}`}
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
