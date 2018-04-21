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
        <div className='Search-types'>
          <div className ='By-Author'>
            <label>By Author</label>
            <input type="text"/>
          </div>
          <br/>
          <div className ='By-Title'>
            <label>By Titile</label>
            <input type="text"/>
          </div>
          <br/>
            <div className ='By-Class'>
              <label>By Class</label>
              <input type="text"/>
            </div>
            <br/>
        </div>
          <button className='button'>Search</button>

      </div>
    );
  }
}

export default Search;
