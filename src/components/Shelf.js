import React, { Component } from 'react'
import Book from './Book'
class Shelf extends Component {
    // Render the shelf off books  
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                this.props.book &&
                                this.props.book.map(book => <Book key={book.id} {...book} moveBook={this.props.moveBook} />)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )
    }

}
export default Shelf
