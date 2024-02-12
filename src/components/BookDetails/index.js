import { Component } from "react";
import { LineWave } from "react-loader-spinner"
import Header from "../Header";
import "./index.css"
class BookDetails extends Component {
    state = { bookDetails: {}, isLoading: false }

    componentDidMount() {
        this.getBookDetails();
    }

    getBookDetails = async () => {
        const { match } = this.props
        const { params } = match
        const { id } = params

        this.setState({ isLoading: true });
        const response = await fetch(`https://api.itbook.store/1.0/books/${id}`);
        const data = await response.json();

        this.setState({ bookDetails: data, isLoading: false });
    }

    render() {
        const { bookDetails, isLoading } = this.state;
        const { image, title, subtitle, authors, price, year, rating, desc } = bookDetails;

        let component
        if (isLoading) {
            component = (<div className="loading-con">
                <LineWave
                    visible={true}
                    height="100"
                    width="100"
                    color="#ffe619"
                    ariaLabel="line-wave-loading"
                />
            </div>)
        }
        else {
            component = <div className="bookDetailsContainer">
                <div className="bookCoverPage">
                    <img src={image} className="bookCover" alt="book-cover" />
                </div>
                <div className="bookDetails">
                    <div className="titleCon">
                        <h1 className="bookTitle">{title}</h1>
                        <p className="subTitle">{subtitle}</p>
                        <h1 className="authors">{authors}</h1>
                        <p className="releaseYear">Released In : {year}</p>
                    </div>
                    <div className="priceAndRatingCon">
                        <h1 className="price">{price}</h1>
                        <p className="rating">Rating: {rating}</p>
                    </div>
                    <div className="addToCartButtonContainer">
                        <button className="addToCartButton" type="button" >Add to Cart</button>
                    </div>
                    <hr />
                    <div className="descriptionCon">
                        <h1>Description</h1>
                        <p className="desc">{desc}</p>
                    </div>
                </div>
            </div>
        }
        return (
            <div>
                <Header />
                {component}
            </div>
        );
    }
}

export default BookDetails;