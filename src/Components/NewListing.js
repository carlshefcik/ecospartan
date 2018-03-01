import React, { Component } from 'react';
import uuid from 'uuid';

class NewListing extends Component {
  constructor(){
    super();
    this.state = {
      newBook:{}
    }
  }


  static defaultProps = {
    book: ['N/A', 'Engineering', 'Math', 'History', 'Chemistry', 'Childrens Book']
  }

  handleSubmit(e){
    if(this.refs.email.value === ''){
      alert('Email is required');
    } else {
      this.setState({newListing:{
        id: uuid.v4(),
        book: this.refs.book.value,
        email: this.refs.email.value
      }}, function (){
        //console.log(this.state);
        this.props.newListing(this.state.newListing);
      });
    }
    e.preventDefault();
  }

  render() {
    let bookOptions = this.props.book.map(book => {
      return <option key={book} value={book}>{book}</option>
    });
    return (
      <div>
      <h3>New Listing</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
        <label>Book</label><br />
        <select ref="book">
          {bookOptions}
        </select>
        </div>


        <div>
        <label>Email</label><br />
        <input type="text" ref="email" />
        </div>

        <br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default NewListing;
