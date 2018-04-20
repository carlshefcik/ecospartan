import React, { Component } from 'react';
import ClassesSearch from './ClassesSearch';
import SubjectSearch from './SubjectSearch';


class Search extends Component {

  render() {

/*
    let bookProfile;
    if(this.props.books){
      bookProfile = this.props.books.map(book => {
        //console.log(book);
        return (
          <BookProfile onDelete={this.deleteBook.bind(this)} key={book.title} book={book} />
        );
      });
    }
    <ClassesSearch classesSearch={this.state.classes} />
*/
    return (
      <div className="Search">
        <h3>Search For a Book</h3>
        <input type="text"/>
        <br/>
        <br/>
        <button className='button'>Search</button>

      </div>
    );
  }
}

export default Search;
