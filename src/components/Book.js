import React, { Component } from 'react'
import { update } from '../BooksAPI'
export class Book extends Component {
    // update date of the book shelf in backend and pass the update to interface 
    handleChange = async e => {
        try {
            const shelf = e.target.value;
            const book = this.props;
            const result = await update(book, shelf)
            this.props.moveBook(book, shelf, result)
        } catch (error) {
            console.log(error)
        }
    }
    // Render book detail and perform any update on shelf of book
    render() {
        return (
            <div>

                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})`
                                }}></div>
                            <div className="book-shelf-changer">
                                <select value={this.props.shelf} onChange={this.handleChange}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{this.props.title}</div>
                        <div className="book-authors">{this.props.authors ? this.props.authors[0] : "No authors"}</div>

                    </div>
                </li>
            </div>
        )
    }
}

export default Book
