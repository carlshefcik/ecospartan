import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

import Book from './Components/Book';
import AddBook from './Components/AddBook';
import NewListing from './Components/NewListing';
import Listing from './Components/Listing';


class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      listings: []
    }
  }

/*
  componentWillMount(){
    this.setState({books: [
      {
        id:uuid.v4(),
        title: 'Goodnight Moon',
        author: 'Margret Wise Brown',
        isbn: '0060775858',
        subject: 'Childrens Book'
      },
      {
        id:uuid.v4(),
        title: 'The Very Hungry Caterpillar',
        author: 'Eric Carle',
        isbn: '0399208534',
        subject: 'Childrens Book'
      },
      {
        id:uuid.v4(),
        title: 'Corduroy',
        author: 'Don Freeman',
        isbn: '0670241334',
        subject: 'Childrens Book'
      }
    ]})
  }
*/

  handleAddBook(book){
    //console.log(book);
    let books = this.state.books;
    books.push(book);
    this.setState({books:books});
  }

  handleDeleteBook(id){
    let books = this.state.books;
    let index = books.findIndex(x => x.id === id);
    books.splice(index, 1);
    this.setState({books:books});
  }

  handleAddListing(listing){
    //console.log(book);
    let listings = this.state.listings;
    listings.push(listing);
    this.setState({listings:listings});
  }

  handleDeleteListing(id){
    let listings = this.state.listings;
    let index = listings.findIndex(x => x.id === id);
    listings.splice(index, 1);
    this.setState({listings:listings});
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to EcoSpartan!</h2>
        <AddBook addBook={this.handleAddBook.bind(this)} />
        <NewListing newListing={this.handleAddListing.bind(this)} />
        <Listing listings={this.state.listings} onDelete={this.handleDeleteListing.bind(this)} />
        <Book books={this.state.books} onDelete={this.handleDeleteBook.bind(this)} />
      </div>
    );
  }
}

export default App;
