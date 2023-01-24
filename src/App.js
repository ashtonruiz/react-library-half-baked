import BookList from './components/book/BookList';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';
import Book from './components/book/Book.js';
import Author from './components/author/Author.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path='/books' component={BookList} />
        <Route exact path='/books/:id' component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
