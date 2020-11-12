import React from 'react' 
import { Button, Divider, Form } from 'semantic-ui-react'

class NewSongForm extends React.Component{

    state = {
        title: "",
        link: "",
        genre: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(this.props)
        fetch ("http://localhost:3000/songs ",{
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                title: this.state.title,
                link: this.state.link,
                genre: this.state.genre,
                artist_id: this.props.artist_id
            })
        })
        .then(res => res.json())
        .then((newlyCreatedSong) => {
            this.props.addSongToSpecificArtist(newlyCreatedSong, this.props.artist_id)
        })
    }


            
        
        
    

    render(){
        return(<Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Field
                label='Title:'
                control='input'
                placeholder='Title:'
                value={this.state.title}
                onChange={this.handleChange}
                name="title"
              />
              <Form.Field
                label='Link:'
                control='input'
                placeholder='Link:'
                value={this.state.link}
                onChange={this.handleChange}
                name="link"
              />
                 <Form.Field
                label='Genre:'
                control='input'
                placeholder='Genre:'
                value={this.state.genre}
                onChange={this.handleChange}
                name="genre"
              />
            </Form.Group>
            <Button type='submit'>Submit</Button>
            <Divider hidden />
          </Form>
            

        )
    }
}

export default NewSongForm;