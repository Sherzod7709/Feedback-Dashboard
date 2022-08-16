import {Link} from "react-router-dom"
import "./main-btn.scss"


const MainBtn = ({to,children}) => {

        if(to) {
            return <Link className="main-btn" to={to} >{children}</Link>
        }

    return (
        <button className="main-btn">{children}</button>
    )
}
export default MainBtn