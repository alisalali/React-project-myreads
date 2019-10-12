import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            books: [],
        };
    }
    //calling getBook api to query the books , and return books array object to update the state
    updateQuery = event => {
        const querytxt = event.target.value;
        if (querytxt.length > 0) {
            this.setState({ query: querytxt }, () => {
                this.getBook(this.state.query)
            });
        } else {
            this.setState({ books: [], query: '' })
        }
    }
    getBook = async (q) => {
        try {
            const res = await BooksAPI.search(this.state.query)
            if (this.state.books !== res) {
                if (res.error) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books: res })
                }
            }
            else {
                this.setState({ books: [] })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    // Render the call back data to interface 
    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">
                            Close
                            </Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.updateQuery} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.books.length > 0 &&
                                this.state.books.map(book => {
                                    const foundShelf = this.props.books.find(
                                        searchBooks => searchBooks.id === book.id
                                    )
                                    if (foundShelf) {
                                        book.shelf = foundShelf.shelf;
                                    } else {
                                        book.shelf = "none"
                                    }
                                    return (
                                        <Book
                                            key={book.id}
                                            {...book}
                                            moveBook={this.props.moveBook}
                                        />)
                                }
                                )}
                            {this.state.books.length === 0 && <h1 style={{ textAlign: "center" }} >No books not found</h1>}

                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search