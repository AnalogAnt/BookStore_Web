import { Component } from "react";
import CartContext from "../../context/CartContext"
import "./index.css"
class Checkout extends Component {
    state = { orderPlaced: false, username: "", address: "", phone: "" }

    

    onNameInput = (event) => {
        this.setState({ username: event.target.value })
    }

    resetPage = () => {
        const { history } = this.props
        this.setState({ orderPlaced: false, username: "" })
        history.push("/");
    }

    onAddress = (event) => {
        this.setState({ address: event.target.value })
    }

    onPhone = (event) => {
        this.setState({ phone: event.target.value })
    }

    render() {
        const { orderPlaced, username, address, phone } = this.state
        let component
        if (orderPlaced && username.length !== 0 && address.length !== 0 && phone.length !== 0) {
            component = (
             <div className="order-placed-page">
                <h1 className="order-placed-title">Thank You! for shopping with us <span className="name">{username}</span></h1>
                <button className="continue-button" onClick={this.resetPage} type="button">Continue Shopping</button>
            </div>)
        }
        else {
            component = (
            <CartContext.Consumer>
                {value=>
                {
                    const {removeAllCartItems} = value
                    const placeOrder = () => {
                        removeAllCartItems();
                        this.setState((prevState) => ({ orderPlaced: !prevState.orderPlaced }));
                    }

                    return(<div className="form-container">
                    <form className="checkout-form">
                        <h1 className="input-header">Contact</h1>
                        <input type="email" placeholder="Email" className="email-input" />
                        <h1 className="input-header">Shipping address</h1>
                        <div className="names-container">
                            <input type="text" placeholder="First name" value={username} onChange={this.onNameInput} className="name-input" />
                            <input type="text" placeholder="Last name" className="name-input" />
                        </div>
                        <input type="text" placeholder="Address" onChange={this.onAddress} className="address-input" />
                        <input type="text" placeholder="Apartment, suite, etc. (optional)" className="address-input" />
                        <div className="address-specific-container">
                            <input type="text" placeholder="City" className="address-specific-input" />
                            <input type="text" placeholder="State" className="address-specific-input" />
                            <input type="text" placeholder="PIN code" className="address-specific-input" />
                        </div>
                        <input type="number" placeholder="Phone" onChange={this.onPhone} className="address-input" />
                        <button type="submit" className="place-order-button" onClick={placeOrder}>Place Order</button>
                    </form>
    
                </div>)
                }}
                
            </CartContext.Consumer>
            )
        }
        return (
            <div className="checkout-page">
                <div className="checkout-logo-container">
                    <div className="checkout-logo">WB</div>WordBox
                </div>
                {component}
            </div>
        );
    }
}

export default Checkout;