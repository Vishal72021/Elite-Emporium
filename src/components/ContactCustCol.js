import React from "react";

export default function ContactCustCol() {
  return (
    <>
      <div className="col-md-5 col-lg-4 order-md-last">
        <h2>Our contact details</h2>
        <div className="fancyinfo">
          <img
            src="https://webstockreview.net/images/address-icon-png-5.png"
            height="30px"
            width="30px"
            alt=""
          />
          <p>
            Plot no.-123/4567, DreamLand, Dreamer's Paradise, Dream, FancyState,
            FancyCountry, PIN-987654
          </p>
        </div>
        <div className="fancyinfo">
          <img
            src="https://cdn3.iconfinder.com/data/icons/placeholder-3/64/post-office-placeholder-pin-pointer-gps-map-location-256.png"
            height="30px"
            width="30px"
            alt=""
          />
          <p>
            Plot no.-987/1234, DreamCompany, Dreamer's Heaven, Dream,
            FancyState, FancyCountry, PIN-975310
          </p>
        </div>
        <div className="fancyinfo">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_318661.png"
            height="30px"
            width="30px"
            alt=""
          />
          <p>+101-1234567890</p>
        </div>
        <div className="fancyinfo">
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_521866.png"
            height="30px"
            width="30px"
            alt=""
          />
          <p>abc.xyz@fantasyISP.com</p>
        </div>
      </div>
    </>
  );
}
