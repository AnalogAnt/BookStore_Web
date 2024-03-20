import { Component } from "react";
import { LineWave } from "react-loader-spinner"
import Header from "../Header";
import CartContext from "../../context/CartContext";
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import "./index.css"
class BookDetails extends Component {
    state = { bookDetails: {}, isLoading: false, quantity: 1 }

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


    renderDetailsView = () =>
    (
        <CartContext.Consumer>
            {value => {
                const { addCartItem } = value
                const { bookDetails, quantity } = this.state
                const { image, title, subtitle, authors, price, year, rating, desc } = bookDetails;
                const addToCart = () => {
                    const { quantity } = this.state
                    addCartItem({ ...bookDetails, quantity: quantity })

                }
                const onDecrementQuantity = () => {
                    const { quantity } = this.state
                    if (quantity > 1) {
                        this.setState(prevState => ({ quantity: prevState.quantity - 1 }))
                    }
                }

                const onIncrementQuantity = () => {
                    this.setState(prevState => ({ quantity: prevState.quantity + 1 }))
                }
                return (
                    <div className="bookDetailsContainer">

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
                                <button onClick={addToCart} className="addToCartButton" type="button" >Add to Cart</button>
                            </div>

                            <div className="quantity-container">
                                <button
                                    type="button"
                                    className="quantity-controller-button"
                                    onClick={onDecrementQuantity}
                                >
                                    <BsDashSquare className="quantity-controller-icon" />
                                </button>
                                <p className="quantity">{quantity}</p>
                                <button
                                    type="button"
                                    className="quantity-controller-button"
                                    onClick={onIncrementQuantity}
                                >
                                    <BsPlusSquare className="quantity-controller-icon" />
                                </button>
                            </div>

                            <hr />

                            <div className="descriptionCon">
                                <h1>Description</h1>
                                <p className="desc">{desc}</p>
                            </div>

                        </div>
                    </div>)
            }}
        </CartContext.Consumer>

    )

    render() {
        const { isLoading } = this.state;


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
            component = this.renderDetailsView()
        }
        console.log()
        return (
            <div>
                <Header />
                {component}
            </div>
        );
    }



}

export default BookDetails;