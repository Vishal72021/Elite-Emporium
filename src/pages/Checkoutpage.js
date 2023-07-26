import React from "react";
import CheckoutHead from "../components/CheckoutHead";
import CheckoutFormCartGrid from "../components/CheckoutFormCartGrid";
import CheckoutFormBillGrid from "../components/CheckoutFormBillGrid";
import CheckoutFoot from "../components/CheckoutFoot";

export default function Checkoutpage() {
  return (
    <>
      <div className="container">
        <main>
          <CheckoutHead />
          <div className="row g-5">
            <CheckoutFormCartGrid />
            <CheckoutFormBillGrid />
          </div>
        </main>
        <CheckoutFoot />
      </div>
    </>
  );
}
