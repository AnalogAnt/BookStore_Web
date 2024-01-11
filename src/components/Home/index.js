import { Component } from "react";
import Header from "../Header"
import "./index.css"
class Home extends Component
{
    render()
    {
        return(
            <><Header /><div className="banner-container">
                <div className="banner-content-container">
                    <h1 className="banner-heading">Book Store</h1>
                    <p className="banner-text">
                        Bookstore was founded in 1992 with a simple yet passionate
                        mission to positively impact the world through the power of
                        reading. Right from our first store in Mumbai to the 92 stores.
                    </p>
                    <p className="banner-text">
                        As India's leading Bookstore retialer, we champion books and
                        nourish a love for the written word through a rich, handpicked
                        collective dfadlkf a df a l fd afd kdsf a dkafjldk lkfdka  kd
                        kfjdla  kfdjalef jkja f8rh ta dsfaj j ieuf j.
                    </p>
                    <button className="explore-button">Explore Books</button>
                </div>
            </div></>
        );
    }
}

export default Home;