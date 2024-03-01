import React from "react";

const MailLogo = (props) => {
  return (
    <a class="d-flex align-items-center text-white text-decoration-none ">
      <img
        src="https://img.icons8.com/3d-fluency/94/gmail.png"
        alt="hugenerd"
        width="45"
        height="45"
        class="rounded-circle fs-2 mr-2 "
      />
      {props.children}
    </a>
  );
};
export default MailLogo;
