import Card from "../../components/card/card-page";
import "./feedbackCard.scss";
import Container from "../../components/container/container";
import GoBack from "../../components/go-back/go-back";
import MainBtn from "../../components/main-btn/main-btn";
import { useParams, Link } from "react-router-dom";
import AddComment from "../../components/add-coment/add-coment";
import { useContext } from "react";
import { CardContex } from "../../App";

const Feedback = () => {
  const { feedbacks } = useContext(CardContex);
  const { id } = useParams();
  const currentTodo = feedbacks.find((todo) => todo.id === +id);
  return (
    <Container className="feedback-container">
      <div className="feedback-head">
        <div className="feedback-head__top">
          <Link to={"/"}>
            <GoBack />
          </Link>
          <MainBtn to={"/editcard"}>Edit Feedback</MainBtn>
        </div>

        <div className="feedback-main">
          <Card todo={currentTodo} />
        </div>
      </div>
      <div className="feedback-list">
        {currentTodo.comments?.length ? (
          currentTodo.comments.map((todo) => (
            <div key={todo.id} className="feedback-coment">
              <div className="feedback-coment__list">
                <div className="FCL-top">
                  <div className="FCL-top__left">
                    <img src={todo.user.image} alt="png" />
                    <div className="FCL-top__name">
                      <h5 className="FCL-top__title">{todo.user.name}</h5>
                      <a href="/">{todo.user.username}</a>
                    </div>
                  </div>
                  <div>
                    <p className="reply">Reply</p>
                  </div>
                </div>
                <div className="FCL-bottom">
                  <p className="FCL-bottom__text">{todo.content}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Please, add comment</p>
        )}
      </div>
      <AddComment></AddComment>
      {/* feedbacks={currentTodo.comments} setFeedbacks={setFeedbacks} */}
    </Container>
  );
};
export default Feedback;
