import React from "react";

export default function CheckoutFormCheck(check, msg) {
  return (
    <>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id={check} />
        <label className="form-check-label" htmlFor={check}>
          {msg}
        </label>
      </div>
    </>
  );
}
