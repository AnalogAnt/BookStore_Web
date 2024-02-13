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
import './App.css';

class App extends Component {
  render() {
    return (

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

    );
  }
}

export default App;
