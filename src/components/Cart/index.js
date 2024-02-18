import Header from "../Header";
import CartList from "../CartList"
import CartContext from "../../context/CartContext";

import "./index.css"

const Cart = (props) => {
    const toCheckout = () => {
        const { history } = props
        history.push('/checkout');
    }

    return (
        <CartContext.Consumer>
            {value => {
                const { cartList, removeAllCartItems } = value
                let totalAmount = 0
                cartList.forEach(eachCartItem => {
                    totalAmount += (parseFloat(eachCartItem.price.slice(1, eachCartItem.price.length)) * eachCartItem.quantity)
                })
                totalAmount = totalAmount.toFixed(2);
                const onRemoveAll = () => {
                    removeAllCartItems();
                }
                const showEmptyView = cartList.length === 0
                return (<div >
                    <Header />
                    <div className="cart-page">
                        {showEmptyView ? <h1 className="no-items">There are no items in your cart!</h1> :
                            <div className="cart-container">
                                <div>
                                    <h1 className="cart-head">My Bag</h1>
                                    <CartList />
                                    <button className="remove-all" onClick={onRemoveAll} type="button">Remove All</button>
                                </div>
                                <hr />
                                <div className="order-summary-container">
                                    <h1 className="order-summary-head">Order Summary</h1>
                                    <hr />
                                    <div className="amount-container">
                                        <p className="amount-para">Amount Payable: ${totalAmount}</p>
                                        <p className="amount"></p>
                                    </div>
                                    <button className="checkout-button" onClick={toCheckout} type="button">Proceed To Checkout</button>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                )
            }}
        </CartContext.Consumer>)




}


export default Cart;