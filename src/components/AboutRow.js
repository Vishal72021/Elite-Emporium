import React from "react";

export default function AboutRow(props) {
  return (
    <>
      <div className="row bg-dark text-white">
        <div className="col-lg-4">
          <img src={`images/avatars/${props.userimage1}`} alt=""
            className="bd-placeholder-img rounded-circle"
            width={140}
            height={140}/>
          <h2 className="fw-normal">{props.usertitle1}</h2>
          <p>
            {props.userdescription1}
          </p>
          <p>
            <a className="btn btn-secondary" href="/">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
        <img src={`images/avatars/${props.userimage2}`} alt=""
            className="bd-placeholder-img rounded-circle"
            width={140}
            height={140}/>
          <h2 className="fw-normal">{props.usertitle2}</h2>
          <p>
            {props.userdescription2}
          </p>
          <p>
            <a className="btn btn-secondary" href="/">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
        <img src={`images/avatars/${props.userimage3}`} alt=""
            className="bd-placeholder-img rounded-circle"
            width={140}
            height={140}/>
          <h2 className="fw-normal">{props.usertitle3}</h2>
          <p>
            {props.userdescription3}
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
