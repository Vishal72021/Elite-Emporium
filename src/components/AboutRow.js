import React from "react";

export default function AboutRow(props) {
  return (
    <>
      <div className="row bg-dark text-white">
        <div className="col-lg-4">
          <img src={props.avatar1} alt=""
            className="bd-placeholder-img rounded-circle"
            width={140}
            height={140}/>
          <h2 className="fw-normal">{props.head1}</h2>
          <p>
            {props.para1}
          </p>
          <p>
            <a className="btn btn-secondary" href="/">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
        <img src={props.avatar2} alt=""
            className="bd-placeholder-img rounded-circle"
            width={140}
            height={140}/>
          <h2 className="fw-normal">{props.head2}</h2>
          <p>
            {props.para2}
          </p>
          <p>
            <a className="btn btn-secondary" href="/">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
        <img src={props.avatar3} alt=""
            className="bd-placeholder-img rounded-circle"
            width={140}
            height={140}/>
          <h2 className="fw-normal">{props.head3}</h2>
          <p>
            {props.para3}
          </p>
          <p>
            <a className="btn btn-secondary" href="/">
              View details »
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
