import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import CartContext from "../../context/CartContext"
import "./index.css"

const CartItem = (props) =>
(
    <CartContext.Consumer>
        {value => {
            const { deleteCartItem, incrementCartItemQuantity,
                decrementCartItemQuantity, } = value
            const { CartItemDetails } = props
            const { title, price, image, isbn13, quantity } = CartItemDetails
            const onRemoveCartItem = () => {
                deleteCartItem(isbn13);
            }
            const onClickDecrement = () => {
                decrementCartItemQuantity(isbn13)
            }
            const onClickIncrement = () => {
                incrementCartItemQuantity(isbn13)
            }
            const totalPrice = parseFloat(price.slice(1, price.length)) * quantity
            return (
                <div className="cart-item">
                    <img src={image} className="cart-image" alt="book-cover" />
                    <h1 className="cart-title">{title}</h1>
                    <div className="cart-quantity-container">
                        <button
                            type="button"
                            className="quantity-controller-button"
                            data-testid="minus"
                            onClick={onClickDecrement}
                        >
                            <BsDashSquare color="#52606D" size={15} />
                        </button>
                        <p className="cart-quantity">{quantity}</p>
                        <button
                            type="button"
                            className="quantity-controller-button"
                            data-testid="plus"
                            onClick={onClickIncrement}
                        >
                            <BsPlusSquare color="#52606D" size={15} />
                        </button>
                    </div>
                    <div className="total-price-remove-container">
                        <p className="cart-total-price">$ {totalPrice}/-</p>

                    </div>
                    <button
                        className="delete-button"
                        type="button"
                        onClick={onRemoveCartItem}
                        data-testid="remove"
                    >
                        <AiFillCloseCircle color="#616E7C" size={20} />
                    </button>
                </div>

            )
        }}
    </CartContext.Consumer>

)

export default CartItem