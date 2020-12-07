import React, { Component } from "react";
import ArtistLink from "./ArtistLink";
import { Card } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import Search from "./Search";

class ArtistContainer extends React.Component {
  state = {
    searchTerm: "",
  };

  changeSearchTerm = (eventObj) => {
    this.setState({
      searchTerm:eventObj.target.value
    })
  };

  filterArtists = (arrayOfArtists) => {
    let filteredArtists = arrayOfArtists.filter(artist => {
      if(artist.name.includes(this.state.searchTerm)){
        return artist;
      }
    })

    return this.state.searchTerm.trim() === "" ? arrayOfArtists : filteredArtists;
  }

  arrayOfComponents = () => {
    const artists = this.filterArtists(this.props.artists)
    return artists.map((singularArtistObj) => {
      return (
        <ArtistLink
          key={singularArtistObj.id}
          artist={singularArtistObj}
          centered
        />
      );
    });
  };
  render() {
    console.log(this.arrayOfComponents());
    return (
      <Container textAlign="center">
        <Search
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <br />
        <Card.Group>{this.arrayOfComponents()} </Card.Group>
      </Container>
    );
  }
  // create a new Component thats called artist link -- send a singular artist object down to
  // the artist link and display their name as a link
}
export default ArtistContainer;
