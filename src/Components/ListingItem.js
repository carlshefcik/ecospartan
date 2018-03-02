import React, { Component } from 'react';

class ListingItem extends Component {
  deleteListing(id){
    //console.log('test');
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="ListingItem">
        <strong>{this.props.listing.book}</strong> - $ {this.props.listing.price} - seller: {this.props.listing.email}
        <br />
        <a href="#" onClick={this.deleteListing.bind(this, this.props.listing.id)}>Delete entry</a>
      </li>
    );
  }
}

export default ListingItem;
