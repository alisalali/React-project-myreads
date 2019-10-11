import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Views/Home'
import Search from './Views/Search'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
  state = {
    books: []
  };
// call the getAll api to return books object and update books state.
  componentDidMount() {
    BooksAPI.getAll()
      .then(
        (books) => {
          this.setState(() => ({
            books
          }))
        }
      )
  }
  moveBook = (book, newShelf, allShelf) => {
    BooksAPI.getAll({ id: book.id }, newShelf)
      .then(
        (books) => {
          this.setState(() => ({
            books
          }))
        }
      )
  }
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <Home books={this.state.books} moveBook={this.moveBook} />
          )} />
          <Route exact path={'/search'} render={() => (
            <Search books={this.state.books} moveBook={this.moveBook} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
