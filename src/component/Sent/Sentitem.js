import React from "react";

const Sentitems = (porps) => {
  const email = porps.email;

  return (
    <tr class="">
      {/* <!-- star --> */}
      <td>
        <i class="fa fa-star text-warning"></i>
      </td>
      <td class="w-25">
        <span class="mb-0 text-muted">{email.Email}</span>
      </td>
      {/* <!-- Message --> */}
      <td class="w-25">
        <span class="text-dark ">{email.Subject}</span>
      </td>

      {/* <!-- Time --> */}
      <td>{email.Time}</td>
    </tr>
  );
};
export default Sentitems;
