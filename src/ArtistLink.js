import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Card, Icon} from "semantic-ui-react"

class ArtistLink extends React.Component{
 render(){
 return(
    <Card as = {Link} to = {`/artists/${this.props.artist.id}`}centered>
    <Image src={this.props.artist.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.props.artist.name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
    <p>{this.props.artist.address}</p>
    </Card.Content>
  </Card>
    )
 }
}


export default ArtistLink

//render out image tag onto the front end inside <Link to = {`/artists/${this.props.artist.id}`}>{this.props.artist.name}</Link>
// look at props of artist link component 
// when we create an artist make sure it has a label and appropriate form input