import React from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'

class NewEventForm extends React.Component{

    state = {
        name: "",
        date: "",
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(this.props)
        fetch ("http://localhost:3000/events ",{
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                date: this.state.date,
                artist_id: this.props.artist_id
            })
        })
        .then(res => res.json())
        .then((newlyCreatedEvent) => {
            this.props.addEventToSpecificArtist(newlyCreatedEvent, this.props.artist_id)
        })
    }


            
        
        
    

    render(){
        return( 
        <div>
            {/* <h2>What are they here to do?</h2>   */}
        <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Field
                label='Event'
                control='input'
                placeholder='Event'
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
              <Form.Field
                label='Date'
                type = 'Date'
                control='input'
                placeholder='ex. 1/1/2020'
                value={this.state.date}
                onChange={this.handleChange}
                name="date"
              />
            </Form.Group>
            <Button type='submit'>Submit</Button>
            <Divider hidden />
          </Form>
          </div>
        )
    }
}




export default NewEventForm;