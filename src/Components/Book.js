import React, { Component } from 'react';
import BookProfile from './BookProfile';

class Book extends Component {
  deleteBook(id){
    this.props.onDelete(id);
  }

  render() {
    let bookProfile;
    if(this.props.books){
      bookProfile = this.props.books.map(book => {
        //console.log(book);
        return (
          <BookProfile onDelete={this.deleteBook.bind(this)} key={book.title} book={book} />
        );
      });
    }
    return (
      <div className="Book">
        <h3>Latest Book Additions</h3>
        {bookProfile}
      </div>
    );
  }
}

export default Book;
