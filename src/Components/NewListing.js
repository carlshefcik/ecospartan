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
    book: [
      '',
      'Software Engineering 1',
      'Applied Probability',
      'Discrete Mathematics',
      'History of America',
      'Intro to Biology',
      'Big Java'
    ],
    condition: [ '', '1', '2', '3', '4', '5' ],
    edition: [ '', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]

  }

  handleSubmit(e){
    if((this.refs.email.value === '') || (this.refs.book.value === '') || (this.refs.price.value === '') || (this.refs.edition.value === '')){
      alert('All entries must be filled');
    } else {
      this.setState({newListing:{
        id: uuid.v4(),
        book: this.refs.book.value,
        price: this.refs.price.value,
        condition: this.refs.condition.value,
        edition: this.refs.edition.value,
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

    let conditionOptions = this.props.condition.map(condition => {
      return <option key={condition} value={condition}>{condition}</option>
    });

    let editionOptions = this.props.edition.map(edition => {
      return <option key={edition} value={edition}>{edition}</option>
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
        <label>Price (enter number)</label><br />
        <input type="text" ref="price" />
        </div>

        <div>
        <label>Condition (5 is best condition)</label><br />
        <select ref="condition">
          {conditionOptions}
        </select>
        </div>

        <div>
        <label>Edition</label><br />
        <select ref="edition">
          {editionOptions}
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
