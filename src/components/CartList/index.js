import CartItem from "../CartItem"
import CartContext from "../../context/CartContext"
import "./index.css"

const CartList = () =>
(

    <CartContext.Consumer>
        {value => {
            const { cartList } = value
            return (
                <ul className="cartlist">
                    {cartList.map((eachItem) => (<CartItem key={eachItem.title} CartItemDetails={eachItem} />))}
                </ul>
            )
        }}
    </CartContext.Consumer>

)

export default CartList