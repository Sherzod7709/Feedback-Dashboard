import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CardContex } from "../../App";
import MainBtn from "../main-btn/main-btn";
import "./add-coment.scss";
const maxCount = 20;

const AddComment = () => {
  const { feedbacks, setFeedbacks } = useContext(CardContex);
  const { id } = useParams();
  const [massage, setMassage] = useState("");
  const [textValue, setTextValue] = useState("");
  const textareaValue = useRef();
  const currnetFeedback = feedbacks.find((todo) => todo.id === +id);
  const handleFormAddComment = (evt) => {
    evt.preventDefault();
    const oldComments = currnetFeedback.comments || [];
    const plus = textareaValue.current.value;
    if (plus) {
      const freshComment = {
        id: Math.floor(Math.random() * 1000),
        content: plus,
        user: {
          image: "photo",
          name: "Thomas Hood",
          username: "brawnybrave",
        },
      };
      const newComments = [freshComment, ...oldComments];
      currnetFeedback.comments = newComments;
      const feedbackIndex = feedbacks.findIndex(
        (feedback) => feedback.id === +id
      );
      setFeedbacks([
        ...feedbacks.slice(0, feedbackIndex),
        currnetFeedback,
        ...feedbacks.slice(feedbackIndex + 1),
      ]);
    }
  };
  const leftCount = +(maxCount - textValue.length);
  const handleTextChange = (evt) => {
    evt.preventDefault();

    if (maxCount - evt.target.value.length >= 0) {
      setTextValue(evt.target.value);
    }
  };
  useEffect(() => {
    if (leftCount === 0) {
      setMassage("Boshqa so'z kirita olmaysiz!");
    } else {
      setMassage("...");
    }
  }, [textValue]);
  return (
    <form onSubmit={handleFormAddComment} className="add-coment-form">
      <label className="add-label" htmlFor="addComment">
        Add Comment
      </label>
      <textarea
        ref={textareaValue}
        value={textValue}
        onChange={handleTextChange}
        placeholder="Fikringizni qoldiring"
        className="add-textarea"
        id="addComment"
      ></textarea>
      <div className="add-coment__bottom">
        <p>{leftCount} Characters left</p>
        <p>{massage}</p>
        <MainBtn>Post Comment</MainBtn>
      </div>
    </form>
  );
};
export default AddComment;
