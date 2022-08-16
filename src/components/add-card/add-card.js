import "./add-card.scss"
import PlusImg from "../../assets/img/Group4.png"
import Container from "../container/container"
import GoBack from "../go-back/go-back"
import { Link } from "react-router-dom"
import MainBtn from "../main-btn/main-btn"
import { useRef, } from "react"
import TypeBadge from "../type-badge/type-badge"
import { useContext } from "react"
import { CardContex } from "../../App"

const AddCard = () => {
    const {feedbacks,setFeedbacks} = useContext(CardContex)
    const inputName = useRef()
    const filterType = useRef()
    const inputDescroption = useRef()

    const handleForSubmit = (evt) => {
        evt.preventDefault();
        const inputValue = inputName.current.value;
        const inputFilter = filterType.current.value;
        const inputDesc = inputDescroption.current.value;
        if(inputValue&&inputDesc){
                const newSingle = {
                id : Math.floor(Math.random()*1000),
                title: inputValue,
                category: <TypeBadge>{inputFilter}</TypeBadge>,
                upvotes: 0,
                status: 0,
                description: inputDesc,
                comments: 0
            };
            setFeedbacks ( [newSingle,...feedbacks] )
        }
        inputName.current.value = ""
        inputDescroption.current.value = ""
    }
    return(
        <Container className="add-card__container">
            <form onSubmit={handleForSubmit} className="add-card-list">
            <Link to={"/"}>
            <GoBack />
            </Link>
        <div className="add-card">
            <img className="add-card-img" src={PlusImg} alt="" />
            <h3 className="add-card__title">Create New Feedback</h3>
            <div className="add-card-head">
                <h4 className="add-card__page-title">Feedback Title</h4>
                <p className="add-card__page-text">Add a short, descriptive headline</p>
                <label htmlFor="name"></label>
                <input ref={inputName} className="add-card__input" type="text" id="name"/>
            </div>
            <div className="add-card-main">
                <h4 className="add-card__page-title">Category</h4>
                <p className="add-card__page-text">Choose a category for your feedback</p>
                <select ref={filterType} className="add-card__option" name="value" >
                    <option className="add-card__option-item" value="Feature">Feature</option>
                    <option className="add-card__option-item" value="Bug">Bug</option>
                    <option className="add-card__option-item" value="Al">Al</option>
                    <option className="add-card__option-item" value="Enhancement">Enhancement</option>
                    <option className="add-card__option-item" value="UX">UX</option>
                </select>
            </div>
            <div className="add-card-bottom">
                <h4 className="add-card__page-title">Feedback Detail</h4>
                <p className="add-card__page-text">Include any specific comments on what should be improved, added, etc.</p>
                <input ref={inputDescroption} className="add-card__info" type="text" name="" id="" />
            </div>
            <div className="button">
                <MainBtn>Cancel</MainBtn>
                <MainBtn>Add Feedback</MainBtn>
            </div>
        </div>
            </form>

        

        </Container>
    )
}
export default AddCard