import BookList from './components/book/BookList';
import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';
import Home from './components/home/Home.js';
import { Link } from 'react-router-dom';


function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      {/* <Link to='/'>Back to home</Link> */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/books' component={BookList} />
        <Route exact path='/books/:id' component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
