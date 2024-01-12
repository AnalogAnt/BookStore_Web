import { Component } from "react";
import Slider from 'rc-slider';
import Header from "../Header"
import BookItem from "../BookItem";
import "./index.css"
class BookList extends Component {
    state = { isLoading: false, booksList: [], searchInput: "", error: false };


    componentDidMount()
    {

        this.getBooks();
    }

    getBooks = async () => {
        this.setState({ isLoading: true });
        const { searchInput } = this.state;
        const options = { method: 'GET' };
        let response;
        if (searchInput === "") {
            response = await fetch("https://api.itbook.store/1.0/new", options);
            
        }
        else {
            response = await fetch(`https://api.itbook.store/1.0/search/${searchInput}`, options);
        }
        if (response.ok) {
            const Booksdata = await response.json();
            
            this.setState({ booksList: Booksdata.books, isLoading: false, error: false });

        }
        else {
            this.setState({ isLoading: false, error: true });
        }


    }

    onSearchInputChange = (event) => {
        this.setState({ searchInput: event.target.value });

    }
    
    onFilterChange = (event)=>
    {
        const {booksList}= this.state;
        const filteredBooksist = booksList.books.filter((each)=>(each.price>event.target.value));
        this.setState({booksList:filteredBooksist});
    }

    render() {
        const { booksList, isLoading, searchInput, error } = this.state;
        let component;
        if(isLoading)
        {
            component=(<div>
                <h1>Loading...</h1>
            </div>)
            
        }
        else
        {
            
            if(error)
            {
                
                component=(<div>
                    <h1>No Books Found.</h1>
                </div>) 
            }
            
            else
            {
               component= (<div className="booksPage">
                    
                    <div className="searchInput-container">
                    <h1 className="book-label">Books</h1>
                        <input value={searchInput} type="search" onChange={this.onSearchInputChange} placeholder="Search" className="search-input"/>
                    </div>
                    <div className="booklist-content-container">
                        <div className="filters-container">
                            <p className="filter-label">Filters</p>
                            <Slider range min={0} max={2000} value={[0,10000]} onChange={this.onFilterChange}/>
                        </div>
                        <div className="booksList-container">
                            {booksList.map((eachBook) => (<BookItem details={eachBook} key={eachBook.isbn13}/>))}
                        </div>
                    </div>
                </div>)
            }
        }
        
        return(<div>
            <Header />
            {component}
        </div>)
    }
}

export default BookList;