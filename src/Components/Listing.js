import React, { Component } from 'react';
import ListingItem from './ListingItem';

class Listing extends Component {
  deleteListing(id){
    this.props.onDelete(id);
  }

  render() {
    let listingItem;
    if(this.props.listings){
      listingItem = this.props.listings.map(listing => {
        //console.log(book);
        return (
          <ListingItem onDelete={this.deleteListing.bind(this)} key={listing.title} listing={listing} />
        );
      });
    }
    return (
      <div className="Listing">
        <h3>Newest Listings</h3>
        {listingItem}
      </div>
    );
  }
}

export default Listing;
