import { Component } from "react";
import Header from "../Header"
import BookItem from "../BookItem";
import {LineWave} from "react-loader-spinner"
import 'rc-slider/assets/index.css';
import "./index.css"

class BookList extends Component {
    state = { isLoading: false, booksList: [], searchInput: "", error: false,minValue:"0",maxValue:"100",filteredBooks:[]};


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
    
    onFilterChange = ()=>
    {
        const {booksList,minValue,maxValue}= this.state;
        const filteredBooksist = booksList.filter((each)=>( parseFloat(each.price.slice(1,each.price.length))>=parseFloat(minValue) && parseFloat(each.price.slice(1,each.price.length))<=parseFloat(maxValue)))
        this.setState({filteredBooks:filteredBooksist});
    }

    onFilterReset = ()=>
    {
        this.setState({minValue:"0",maxValue:"100",filteredBooks:[]})
    }

    onMinChange = (event)=>
    {
        this.setState({minValue:event.target.value})
    }

    onMaxChange=(event)=>
    {
        this.setState({maxValue:event.target.value})
    }

    render() {
        const { booksList, isLoading, searchInput, error ,minValue,maxValue,filteredBooks} = this.state;
        let renderBooksList
        
        if(filteredBooks.length!==0)
        {
            renderBooksList=filteredBooks
        }
        else
        {
            renderBooksList = booksList
        }
        let component;
        if(isLoading)
        {
            component=(<div className="loading-con">
                <LineWave
  visible={true}
  height="100"
  width="100"
  color="#ffe619"
  ariaLabel="line-wave-loading"
  />
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
                            <div className="priceFilterCon">
                                <p>Price</p>
                            <input value={minValue} placeholder="0" type="text" onChange={this.onMinChange} className="inputt" />
                            <input value={maxValue} type="text" placeholder="100" onChange={this.onMaxChange} className="inputt" />
                            
                            </div>
                            <div className="filterButtonsContainer">
                            <button onClick={this.onFilterChange} type="button" className="applyButt">Apply</button>
                            <button onClick={this.onFilterReset} type="button" className="applyButt">Reset</button>
                            </div>
                        </div>
                        <div className="booksList-container">
                            {renderBooksList.map((eachBook) => (<BookItem details={eachBook} key={eachBook.isbn13}/>))}
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