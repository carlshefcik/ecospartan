import React, { Component } from 'react';

class BookProfile extends Component {
  deleteBook(id){
    //console.log('test');
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Book">
        <strong>{this.props.book.title}</strong> by {this.props.book.author}
        <br />
        - ISBN: {this.props.book.isbn} - Subject: {this.props.book.subject}
        <br />
        <a href="#" onClick={this.deleteBook.bind(this, this.props.book.id)}>Delete entry</a>
      </li>
    );
  }
}

export default BookProfile;
