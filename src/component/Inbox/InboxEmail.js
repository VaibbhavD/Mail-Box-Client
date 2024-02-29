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

  const DeleteHandler = () => {
    dispatch(EmailActions.DeleteInbox(email));
  };

  const Starempty = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-star"
      viewBox="0 0 16 16"
      onClick={() => dispatch(EmailActions.MakeImported(email))}
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
    </svg>
  );
  const Starfill = (
    <i
      class="fa fa-star text-warning"
      onClick={() => dispatch(EmailActions.UndoImported(email))}
    ></i>
  );

  return (
    // <Link to={`/inbox/:${email.id}`} key={email.id} className="link">
    <tr className="email">
      {/* <!-- star --> */}
      {email.important && <td class="">{Starfill}</td>}
      {!email.important && <td class="">{Starempty}</td>}
      <td class="w-25" onClick={onClickHandler}>
        <span class="mb-0 ">{email.Email}</span>
      </td>
      {/* <!-- Message --> */}
      <td class="w-25" onClick={onClickHandler}>
        <span class="text-dark text-muted">{email.Subject}</span>
      </td>

      {/* <!-- Time --> */}
      <td class="text-muted" onClick={onClickHandler}>
        {email.Time}
      </td>
      {!email.db && (
        <td class="">
          <i class="fa fa-circle text-primary "></i>
        </td>
      )}
      {email.db && <td onClick={onClickHandler}></td>}
      {/* Delete Icon */}
      <td class=" text-danger" onClick={DeleteHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash3"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
        </svg>
      </td>
    </tr>
    // </Link>
  );
};
export default InboxEmail;
