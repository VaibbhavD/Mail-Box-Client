import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const EmailSummury = () => {
  const param = useParams();
  const navigate = useNavigate();
  const InboxEmails = useSelector((state) => state.Email.Inbox);
  console.log(InboxEmails);
  console.log(param.id);

  let email;
  InboxEmails.map((e) => {
    if (e.id == param.id) email = e;
  });

  if (!email) {
  } else {
    return (
      <>
        <Link to={"/inbox"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="1 3 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </Link>
        <main class=" border p-3">
          <div class="details ">
            <div class="flex">
              <img
                class=" "
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
              />
              <div class="from">
                From :<span class="from">{email.Email}</span>
                {/* </div> */}
                {/* <div class="date"> */}
                <b class="text-end date">{email.Time}</b>
              </div>
            </div>
            <div class="content">
              <p>{email.Subject}</p>
              <blockquote>{email.Content}</blockquote>
            </div>

            <form method="post" action="">
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="message"
                  name="body"
                  rows="12"
                  placeholder="Click here to reply"
                ></textarea>
              </div>
              <div class="form-group">
                <button tabindex="3" type="submit" class="btn btn-success">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </main>
      </>
    );
  }
};
export default EmailSummury;
