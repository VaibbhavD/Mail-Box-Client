import React from "react";
import "../../App.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { EmailActions } from "../../Store/EmailSlice";

const InboxEmail = (props) => {
  const email = props.email;
  const navigete = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(EmailActions.SeeEmails(email.id));
    navigete(`/inbox/${email.id}`);
  };

  return (
    // <Link to={`/inbox/:${email.id}`} key={email.id} className="link">
    <tr onClick={onClickHandler} className="email">
      {/* <!-- star --> */}

      <td class="">
        <i class="fa fa-star text-warning"></i>
      </td>
      <td class="w-25  ">
        <span class="mb-0 ">{email.Email}</span>
      </td>
      {/* <!-- Message --> */}
      <td class="">
        <span class="text-dark text-muted">{email.Subject}</span>
      </td>

      {/* <!-- Time --> */}
      <td class="text-muted">{email.Time}</td>
      {!email.db && (
        <td class="">
          <i class="fa fa-circle text-primary "></i>
        </td>
      )}
    </tr>
    // </Link>
  );
};
export default InboxEmail;
