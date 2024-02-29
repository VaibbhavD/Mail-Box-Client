import React from "react";
import { EmailActions } from "../../Store/EmailSlice";
import "../../App.css";
import { useDispatch } from "react-redux";

const StarEmail = (props) => {
  const email = props.email;
  const dispatch = useDispatch();

  return (
    // <Link to={`/inbox/:${email.id}`} key={email.id} className="link">
    <tr className="email">
      {/* <!-- star --> */}
      <td class=" text-danger">
        <i
          class="fa fa-star text-warning"
          onClick={() => dispatch(EmailActions.UndoImported(email))}
        ></i>
      </td>

      <td class="w-25">
        <span class="mb-0 text-muted p-2">{email.Email}</span>
      </td>
      {/* <!-- Message --> */}
      <td class="w-25">
        <span class="text-dark text-muted">{email.Subject}</span>
      </td>

      {/* <!-- Time --> */}
      <td class="text-muted">{email.Time}</td>
    </tr>
    // </Link>
  );
};
export default StarEmail;
