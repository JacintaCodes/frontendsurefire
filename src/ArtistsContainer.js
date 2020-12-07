import React, { Component } from "react";
import ArtistLink from "./ArtistLink";
import { Card } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

class ArtistContainer extends React.Component {
  // state = {
  //   searchTerm:""
  // }

  arrayOfComponents = () => {
    return this.props.artists.map((singularArtistObj) => {
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
    console.log(this.arrayOfComponents())
    return (
      <Container textAlign="center">
        <Card.Group>{this.arrayOfComponents()} </Card.Group>
      </Container>
    );
  }
  // create a new Component thats called artist link -- send a singular artist object down to
  // the artist link and display their name as a link
}
export default ArtistContainer;
