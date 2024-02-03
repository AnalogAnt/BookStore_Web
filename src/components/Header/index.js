import { Component } from "react";
import {Link} from 'react-router-dom'
import {FaBook,FaShoppingBag,FaUser} from "react-icons/fa"

import "./index.css"
class Header extends Component
{
    onClickUser = ()=>
    {
    }
    render()
    {
        return(
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

                        </li>
                        </Link>
                        
                        <li className="icon-container">
                            <button type="button" onClick={this.onClickUser} className="userIconButton"><FaUser className="icon" /></button>
                            
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header