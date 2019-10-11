import React, { Component } from 'react'
import Shelf from '../components/Shelf'
import { Link } from 'react-router-dom'
export class Home extends Component {
    // Render home components view and render shelf (currentlyReading,wantToRead,read) to interface.
    render() {
        const currentlyReading = this.props.books.filter(books => books.shelf === 'currentlyReading')
        const wantToRead = this.props.books.filter(books => books.shelf === 'wantToRead')
        const read = this.props.books.filter(books => books.shelf === 'read')
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Shelf title="Currently Reading" book={currentlyReading} moveBook={this.props.moveBook} />
                        <Shelf title="Want to read" book={wantToRead} moveBook={this.props.moveBook} />
                        <Shelf title="Read" book={read} moveBook={this.props.moveBook} />
                    </div>

                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
