import Modal from "../ModalUI/Modal";

const DiscardNotify = (props) => {
  return (
    <Modal>
      <div class=" text-center pt-3">
        <div class="modal-body ">
          <span class="font-weight-bold">Save Your Email Click on Draft</span>
          <br></br>
          <span class="font-weight-bold">Delete Email Click on Discard</span>
          <div class="mt-4 mb-1">
            {" "}
            <button class="btn btn-primary">
              Draft <i class="fa fa-cloud-download"></i>
            </button>{" "}
            <button
              class="btn btn-danger"
              onClick={() => props.setshowNotify()}
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
