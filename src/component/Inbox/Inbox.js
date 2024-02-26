import React from "react";
import Sentitems from "../Sent/Sentitem";
import { useSelector } from "react-redux";

const Inbox = () => {
  const SentEmail = useSelector((state) => state.Email.Sent);

  return (
    <div class="container ">
      <div class="row m-auto  ">
        <div class="col-sm-11 ">
          <div class="card  ">
            <div class="card-body bg-primary text-white mailbox-widget pb-0">
              <h2 class="text-white pb-3">Inbox</h2>
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
export default Inbox;
