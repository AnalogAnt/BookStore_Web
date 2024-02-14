import { Component } from "react";
import "./index.css"
class Checkout extends Component
{
    state = {orderPlaced:false,username:""}

    placeOrder = ()=>
    {
        this.setState((prevState)=>({orderPlaced:!prevState.orderPlaced}));
    }

    onNameInput = (event)=>
    {
        this.setState({username:event.target.value})
    }

    resetPage = ()=>
    {
        const {history} = this.props
        this.setState({orderPlaced:false,username:""})
        history.push("/");
    }

    render()
    {
        const {orderPlaced,username} = this.state
        let component
        if(orderPlaced)
        {
            component = (<div className="order-placed-page">
                <h1 className="order-placed-title">Thank You! for shopping with us {username}</h1>
                <button className="continue-button" onClick={this.resetPage} type="button">Continue Shopping</button>
            </div>)
        }
        else
        {
            component= (<><div className="form-container">
                <form className="checkout-form">
                    <h1 className="input-header">Contact</h1>
                    <input type="email" placeholder="Email" className="email-input" />
                    <h1 className="input-header">Shipping address</h1>
                    <div className="country-container">
                        <p className="country">India</p>
                    </div>
                    <div className="names-container">
                        <input type="text" placeholder="First name" value={username} onChange={this.onNameInput} className="name-input" />
                        <input type="text" placeholder="Last name" className="name-input" />
                    </div>
                    <input type="text" placeholder="Address" className="address-input" />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="address-input" />
                    <div className="address-specific-container">
                        <input type="text" placeholder="City" className="address-specific-input" />
                        <input type="text" placeholder="State" className="address-specific-input" />
                        <input type="number" placeholder="PIN code" className="address-specific-input" />
                    </div>
                    <input type="number" placeholder="Number" className="address-input" />
                    <button type="submit" className="place-order-button" onClick={this.placeOrder}>Place Order</button>
                </form>
            </div><div className="order-summary-container">

                </div></>

            )
        }
        return(
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