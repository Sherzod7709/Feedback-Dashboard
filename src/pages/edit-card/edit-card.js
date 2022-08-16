import { Link, } from "react-router-dom"
import Container from "../../components/container/container"
import GoBack from "../../components/go-back/go-back"
import "./edit-card.scss"
const EditCard = () => {
    return (
        <Container className="Edit-card__container">
            <div>
                    <Link to={ "/" }> <GoBack/> </Link>
                <form >
                    Edit Feedback
                </form>
            </div>
        </Container>
    )
}
export default EditCard