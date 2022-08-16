import "./card-page.scss"
import Icon from "../../assets/img/comment.png"
import TypeBadge from "../../components/type-badge/type-badge"
import {Link} from "react-router-dom"
import Path from "../../assets/img/path2.png"
// import { useContext } from "react"
// import {CardContex} from "../../App"

const Card = ({todo}) => {
    // const {todo} = useContext(CardContex)
    return (
        <div key={todo.id} className="card-page">
                <div className="card-page__left">
            <div>
                <div className="card-page__left-num">
                    <img src={Path} alt="" />
                    <span>{todo.upvotes}</span>
                </div>
            </div>
            <div >
                <Link to={"/Feedback/"+todo.id}>
                <h4>{todo.title}</h4>
                </Link>
                <p >{todo.description}</p>
                <TypeBadge>{todo.category}</TypeBadge>
            </div>
                </div>
            <div className="card-page__comment">
                <img src={Icon} alt="Comment-img" />
                <span>{todo.comments ? todo.comments.length : 0}</span>
            </div>
        </div>

    )
}
export default Card ;

