# Udacity FEND MyReads Project

The starter template for the project for Udacity's React Fundamentals course. The template is to save you time by providing a static example of the CSS and HTML markup that used, but without any of the React code that to complete the project. The template modifiy and added interactivity to the app by refactoring the static code in this template.

[Starter Template for React App ](https://github.com/facebookincubator/create-react-app) 

## Install project

To get start the project:
* git clone of the project 
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React default Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
    │   ├── Book.js # Book components that render book information
    │   ├── Shelf.js # Shelf components that render shelf information (Read , Want to read , Cunrrently reading)
    ├── Views
    │   ├── Home.js # Home componets  rendering home page 
    │   ├── Search.js # Search componets  rendering search page 
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of app. 
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
    ├── icons # Helpful images for app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```
## Backend Server
The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Udacity Resources:

- [Project starter template](https://github.com/udacity/reactnd-project-myreads-starter)
- [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
- [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

