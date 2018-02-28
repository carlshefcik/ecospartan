import React, { Component } from 'react';
import uuid from 'uuid';

class AddBook extends Component {
  constructor(){
    super();
    this.state = {
      newBook:{}
    }
  }


  static defaultProps = {
    subjects: ['N/A', 'Engineering', 'Math', 'History', 'Chemistry']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newBook:{
        id: uuid.v4(),
        title: this.refs.title.value,
        author: this.refs.author.value,
        isbn: this.refs.isbn.value,
        subject: this.refs.subject.value
      }}, function (){
        //console.log(this.state);
        this.props.addBook(this.state.newBook);
      });
    }
    e.preventDefault();
  }

  render() {
    let subjectOptions = this.props.subjects.map(subject => {
      return <option key={subject} value={subject}>{subject}</option>
    });
    return (
      <div>
      <h3>Add Book</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
        <label>Title</label><br />
        <input type="text" ref="title" />
        </div>
        <div>
        <label>Author</label><br />
        <input type="text" ref="author" />
        </div>
        <div>
        <label>ISBN</label><br />
        <input type="text" ref="isbn" />
        </div>
        <div>
        <label>Subject</label><br />
        <select ref="subject">
          {subjectOptions}
        </select>
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default AddBook;
