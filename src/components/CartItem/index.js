import CartContext from "../../context/CartContext"
import "./index.css"

const CartItem = (props) =>
(
    <CartContext.Consumer>
        {value => {
            const { deleteCartItem } = value
            const { CartItemDetails } = props
            const { title, price, image, isbn13 } = CartItemDetails
            const onRemove = () => {
                deleteCartItem(isbn13);
            }
            return (
                <div className="cart-item">
                    <img src={image} className="cart-image" alt="book-cover" />
                    <h1 className="cart-title">{title}</h1>
                    <p className="cart-price">{price}</p>
                    <button className="delete-button" onClick={onRemove} type="button">Remove</button>
                </div>
            )
        }}
    </CartContext.Consumer>

)

export default CartItem