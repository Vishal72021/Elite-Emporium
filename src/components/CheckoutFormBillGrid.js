import React from "react";
import CheckoutFormCheck from "../utilcomponents/CheckoutFormCheck";
import CheckoutPayment from "../utilcomponents/CheckoutPayment";
import CheckoutBilling from "../utilcomponents/CheckoutBilling";

export default function CheckoutFormBillGrid() {
  return (
    <>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate="">
          <CheckoutBilling />
          <hr className="my-4" />
          <CheckoutFormCheck
            check="same-address"
            msg="Shipping address is the same as my billing address"
          />
          <CheckoutFormCheck
            check="save-info"
            msg="Save this information for next time"
          />
          <hr className="my-4" />
          <CheckoutPayment />
        </form>
      </div>
    </>
  );
}
