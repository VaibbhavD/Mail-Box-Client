import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import Sentitems from "./Sentitem";

const Sent = () => {
  const SentEmail = useSelector((state) => state.Email.Sent);
  console.log(SentEmail);

  return (
    <div class="container ">
      <div class="row m-auto  ">
        <div class="col-sm-11 ">
          <div class="card  ">
            <div class="card-body bg-primary text-white mailbox-widget pb-0">
              <h2 class="text-white pb-3">Sent</h2>
            </div>
            <div class="table-responsive">
              <table class="table email-table no-wrap table-hover v-middle mb-0 font-14">
                <tbody>
                  {/* <!-- row --> */}
                  {SentEmail.map((email) => (
                    <Sentitems email={email} />
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
export default Sent;
