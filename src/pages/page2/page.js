import Container from "../../components/container/container"
import Nav from "../../components/nav/nav"
import Card from "../../components/card/card-page"
import "./page.scss"
import Gap from "../../components/gap-page/gap-page"
import { useContext } from "react"
import { CardContex } from "../../App"
// import { useContext } from "react"
// import {CardContex} from "../../App"

const Page = () => {
    const {feedbacks} = useContext(CardContex)
    return (
        <div className="page">
            <Container className="page__container">
                <Nav></Nav>
            {feedbacks?.length ? feedbacks.map(todo => <Card  key={todo.id} todo={todo}/>) : <Gap /> }
                
            </Container>
        </div>
    )
}
export default Page;
