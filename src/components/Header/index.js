import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import { FaBook, FaShoppingBag, FaArrowRight } from "react-icons/fa"
import "./index.css"
const Header = (props) => {
    const { history } = props
    const onClickUser = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
    }

    return (
        <nav className="header-container">
            <div className="header-content-container">
                <Link to="/" className="nav-link">
                    <div className="logo-container">
                        <div className="logo">WB</div>WordBox
                    </div>
                </Link>

                <ul className="nav-items-container">
                    <Link to="/books" className="nav-link">
                        <li className="icon-container">
                            <FaBook className="icon" />

                        </li>
                    </Link>
                    <Link to="/cart" className="nav-link">
                        <li className="icon-container">
                            <FaShoppingBag className="icon" />
                            <span className='cart-count'></span>
                        </li>
                    </Link>

                    <li className="icon-container">
                        <button type="button" onClick={onClickUser} className="logoutIconButton">< FaArrowRight className="icon" /></button>

                    </li>
                </ul>
            </div>
        </nav>

    )

}

export default withRouter(Header)
