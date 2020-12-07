import { render } from '@testing-library/react';
import React from 'react'
import { withRouter} from 'react-router-dom'
import { Button, Divider, Form } from 'semantic-ui-react'


class ArtistForm extends React.Component{
    
state = {
    name:"",
    address: "",
    image: ""
}

handleInputChange = (evt) => {
      
    this.setState({
        [evt.target.name] : evt.target.value
    })
    this.props.filterArtist(this.state.searchTerm)
}

 handleSubmit = (evt) => {
     evt.preventDefault()
    fetch ("http://localhost:3000/artists",{
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            name: this.state.name,
            address: this.state.address,
            image: this.state.image
            
        })
    })
    .then(res => res.json())
            .then((newlyCreatedArtist)=> {
                this.props.addArtistToState(newlyCreatedArtist)
                this.props.history.push(`/artists/${newlyCreatedArtist.id}`)
            })
 }

    
    render(){
        return(
            <div>
            <p>Add an Artist</p>
            <Form onSubmit={this.handleSubmit} >
        <Form.Group widths='equal'>
          <Form.Field
            label ='Name'
            control='input'
            placeholder='Name'
            name= "name"
            value = {this.state.name} 
            onChange={this.handleInputChange}
          />
          <Form.Field
            label ='Address'
            control='input'
            name="address"
            value = {this.state.address} 
            onChange={this.handleInputChange}
            placeholder='Artist'
          />
            <Form.Field
            label ='image'
            control='input'
            name="image"
            value = {this.state.image} 
            onChange={this.handleInputChange}
            placeholder='image'
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
            </div>
        )
    }
}
export default withRouter(ArtistForm);