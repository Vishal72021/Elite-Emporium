import React from "react";
import FeatureImg1 from "../assets/features/feature1.png";
import FeatureImg2 from "../assets/features/feature2.png";
import FeatureImg3 from "../assets/features/feature3.png";
import FeatureImg4 from "../assets/features/feature4.png";
import FeatureImg5 from "../assets/features/feature5.png";
import FeatureImg6 from "../assets/features/feature6.png";
import FeatureImg7 from "../assets/features/feature7.png";
import FeatureImg8 from "../assets/features/feature8.png";

export default function HomeFeatureGrid() {
  return (
    <>
      <div className="bg-warning">
        <div className="px-4 py-5" id="icon-grid">
          <h2 className="pb-2 border-bottom text-center">
            Features Of Our Website
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg1}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  User Registration and Accounts
                </h3>
                <p>
                  Users can create accounts to store their personal information,
                  track order history, save payment preferences, and manage
                  their profiles.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg2}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Social Media Integration
                </h3>
                <p>
                  Integration with social media platforms enables users to share
                  products, reviews, or purchases, expanding the reach of the
                  website and promoting customer engagement.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg3}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Product Catalog
                </h3>
                <p>
                  A well-organized product catalog allows customers to browse
                  and search for products. It includes product descriptions,
                  images, pricing, and other relevant details.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg4}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Order Management
                </h3>
                <p>
                  Website administrators should have access to an order
                  management system to track orders, update order statuses,
                  manage inventory, and generate invoices or shipping labels.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg5}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Secure Checkout
                </h3>
                <p>
                  The checkout process should be secure, utilizing encryption to
                  protect sensitive customer information. It involves selecting
                  shipping and payment options, verifying details, and
                  completing the purchase.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg6}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Multiple Payment Options
                </h3>
                <p>
                  E-commerce websites should support various payment methods
                  such as credit/debit cards, digital wallets, bank transfers,
                  or cash on delivery, providing flexibility for customers.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg7}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Order Tracking and Notifications
                </h3>
                <p>
                  Customers should receive order confirmations, shipping
                  notifications, and tracking details to stay updated on the
                  status of their purchases.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                src={FeatureImg8}
                alt=""
                className="mx-2"
                style={{ borderRadius: "20px" }}
                width="40px"
                height="40px"
              />
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Customer Support
                </h3>
                <p>
                  Contact information, live chat, or a customer support ticket
                  system should be available to assist users with their
                  inquiries, issues, or returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
