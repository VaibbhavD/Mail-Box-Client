import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import { EmailActions } from "../../Store/EmailSlice";
import { useNavigate } from "react-router";

const DiscardNotify = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SaveDraft = () => {
    props.SaveDraft();
  };

  const DiscardHandler = () => {
    props.setshowNotify();
    navigate("/Home");
  };

  return (
    <Modal>
      <div class=" text-center pt-3">
        <div class="modal-body ">
          <span class="font-weight-bold">Save Your Email Click on Draft</span>
          <br></br>
          <span class="font-weight-bold">Delete Email Click on Discard</span>
          <div class="mt-4 mb-1">
            {" "}
            <button class="btn btn-primary" onClick={SaveDraft}>
              Draft <i class="fa fa-cloud-download"></i>
            </button>{" "}
            <button
              type="button"
              class="btn btn-danger"
              onClick={DiscardHandler}
            >
              Discard
            </button>{" "}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default DiscardNotify;
