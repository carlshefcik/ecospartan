import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

import Book from './Components/Book';
import AddBook from './Components/AddBook';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: []
    }
  }

  componentWillMount(){
    this.setState({books: [
      {
        id:uuid.v4(),
        title: 'Goodnight Moon',
        author: 'Margret Wise Brown',
        isbn: '0060775858',
        subject: 'N/A'
      },
      {
        id:uuid.v4(),
        title: 'The Very Hungry Caterpillar',
        author: 'Eric Carle',
        isbn: '0399208534',
        subject: 'N/A'
      },
      {
        id:uuid.v4(),
        title: 'Corduroy',
        author: 'Don Freeman',
        isbn: '0670241334',
        subject: 'N/A'
      }
    ]})
  }

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

  render() {
    return (
      <div className="App">
        Welcome to EcoSpartan
        <AddBook addBook={this.handleAddBook.bind(this)} />
        <Book books={this.state.books} onDelete={this.handleDeleteBook.bind(this)} />
      </div>
    );
  }
}

export default App;
