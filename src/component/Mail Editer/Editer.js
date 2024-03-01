import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../App.css";
import { useDispatch } from "react-redux";
import { EmailActions } from "../../Store/EmailSlice";
import DiscardNotify from "./DiscardNotify";

const Editer = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [showNotify, setshowNotify] = useState(false);
  const EmailRef = useRef();
  const SubjectRef = useRef();
  const dispatch = useDispatch();

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };
  const getTextFromEditor = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const Content = contentState.getPlainText();

    dispatch(
      EmailActions.AddSent({
        id: Math.random(),
        Email: EmailRef.current.value,
        Subject: SubjectRef.current.value,
        Content: Content,
        Time: Date(),
        db: false,
        important: false,
      })
    );
  };

  const SaveDraft = () => {
    const contentState = editorState.getCurrentContent();
    const Content = contentState.getPlainText();

    dispatch(
      EmailActions.AddDraft({
        id: Math.random(),
        Email: EmailRef.current.value,
        Subject: SubjectRef.current.value,
        Content: Content,
        Time: Date(),
        db: false,
        important: false,
      })
    );
  };

  const DiscardHandler = () => {
    setshowNotify((prev) => !prev);
    console.log(showNotify);
  };

  return (
    <>
      {showNotify && (
        <DiscardNotify setshowNotify={DiscardHandler} SaveDraft={SaveDraft} />
      )}
      <div class="container -mt-5">
        <main class="">
          <div class="card-body bg-primary text-white mailbox-widget pb-0 rounded col-sm-11  ">
            <h2 class="text-white pb-4">Compose</h2>
          </div>
          <form onSubmit={getTextFromEditor} class=" -mt-5">
            <div class="form-row  ">
              <label for="to" class="col-2 col-sm-1 col-form-label">
                To
              </label>
              <div class="col-10 col-sm-11">
                <input
                  type="email"
                  class="form-control"
                  id="to"
                  placeholder="email"
                  ref={EmailRef}
                  required
                />
              </div>
            </div>

            <div class="form-row mb-3 ">
              <label for="bcc" class="col-2 col-sm-1 col-form-label">
                Subject
              </label>
              <div class="col-10 col-sm-11">
                <input
                  type="text"
                  class="form-control"
                  id="bcc"
                  placeholder="subject"
                  ref={SubjectRef}
                  required
                />
              </div>
            </div>

            <div class="mt-4">
              <div class="col-sm-11 ml-auto ">
                <div class=" ">
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    placeholder="The message goes here..."
                  />
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <button type="submit" class="btn btn-success px-3 mx-2">
                Send
              </button>
              <button
                type="button"
                class="btn btn-danger mx-2"
                onClick={DiscardHandler}
              >
                Discard
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};
export default Editer;
