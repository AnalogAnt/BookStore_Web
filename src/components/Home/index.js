
import { Link } from "react-router-dom";

import Header from "../Header"
import "./index.css"
const Home = () => {

    return (
        <><Header /><div className="banner-container">
            <div className="banner-content-container">
                <h1 className="banner-heading">Welcome to WordBox: Your Literary Haven</h1>
                <p className="banner-text">
                    Are you a book enthusiast, a lover of words, or an avid reader? Look no further! WordBox is your online sanctuary for all things literary. Whether you’re seeking your next thrilling adventure, a heartwarming romance, or thought-provoking non-fiction, we’ve got you covered.
                </p>
                <h1 className="banner-heading">Explore Our Shelves</h1>
                <Link to="/books">
                    <button className="explore-button">Explore Books</button>
                </Link>

            </div>
        </div></>
    );

}

export default Home;