import React from "react";
import StarEmail from "./StarEmail";

import { useSelector } from "react-redux";

const Star = () => {
  const StarEmails = useSelector((state) => state.Email.Star);

  return (
    <div class="container ">
      <div class="row m-auto  ">
        <div class="col-sm-11 ">
          <div class="card  ">
            <div class="card-body bg-primary text-white mailbox-widget pb-0">
              <h2 class="text-white pb-3">Imported</h2>
            </div>
            <div class="table-responsive">
              <table class="table email-table no-wrap table-hover v-middle mb-0 font-14">
                <tbody>
                  {/* <!-- row --> */}
                  {StarEmails.map((email) => (
                    <StarEmail email={email} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Star;
