import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import CartContext from './context/CartContext';
import './App.css';

class App extends Component {
  state = { cartList: [] }

  addCartItem = (product) => {
    this.setState(prevState => ({ cartList: [...prevState.cartList, product] }))
  }
  deleteCartItem = (isbn13) => {
    const { cartList } = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.isbn13 !== isbn13,
    )

    this.setState({ cartList: updatedCartList })
  }

  removeAllCartItems = () => {
    this.setState({ cartList: [] })
  }

  incrementCartItemQuantity = isbn13 => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (isbn13 === eachCartItem.isbn13) {
          const updatedQuantity = eachCartItem.quantity + 1
          return { ...eachCartItem, quantity: updatedQuantity }
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = isbn13 => {
    const { cartList } = this.state

    const productObject = cartList.find(eachCartItem => (eachCartItem.isbn13 === isbn13))

    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (isbn13 === eachCartItem.isbn13) {
            const updatedQuantity = eachCartItem.quantity - 1
            return { ...eachCartItem, quantity: updatedQuantity }
          }
          return eachCartItem
        }),
      }))
    } else {
      this.deleteCartItem(isbn13)
    }
  }

  render() {
    const { cartList } = this.state
    return (
      <CartContext.Provider value={{
        cartList, addCartItem: this.addCartItem, deleteCartItem: this.deleteCartItem, incrementCartItemQuantity: this.incrementCartItemQuantity,
        decrementCartItemQuantity: this.decrementCartItemQuantity,
        removeAllCartItems: this.removeAllCartItems,
      }}>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetails} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkout" component={Checkout} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    );
  }
}

export default App;
