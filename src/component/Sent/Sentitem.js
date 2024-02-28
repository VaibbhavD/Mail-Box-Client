import React from "react";
import "../../App.css";

const Sentitems = (porps) => {
  const email = porps.email;

  return (
    <tr className="email">
      <td>
        <i class="fa fa-star text-warning"></i>
      </td>
      <td class="w-25">
        <span class="mb-0 ">{email.Email}</span>
      </td>
      {/* <!-- Message --> */}
      <td class="">
        <span class="text-muted ">{email.Subject}</span>
      </td>

      {/* <!-- Time --> */}
      <td class="text-muted ">{email.Time}</td>
    </tr>
  );
};
export default Sentitems;
