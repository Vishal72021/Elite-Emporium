import React from "react";
import Tick from "../assets/tick.png";

export default function MembershipTable() {
  return (
    <>
      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }} />
              <th style={{ width: "22%" }}>Free</th>
              <th style={{ width: "22%" }}>Pro</th>
              <th style={{ width: "22%" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Public
              </th>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Private
              </th>
              <td />
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Permissions
              </th>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sharing
              </th>
              <td />
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited members
              </th>
              <td />
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Extra security
              </th>
              <td />
              <td />
              <td>
                <img src={Tick} alt="" width={24} height={24} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
