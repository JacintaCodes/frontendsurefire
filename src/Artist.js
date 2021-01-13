import React from 'react'
import SongsContainer from './SongsContainer'
import NewSongForm from './NewSongForm'
import EventsContainer from './EventsContainer'
import {Segment, Image} from 'semantic-ui-react'
import {Icon} from 'semantic-ui-react'
import {Grid} from 'semantic-ui-react'

class Artist extends React.Component{
 


    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/${this.props.artists.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json"
            },
        })
            .then(res => res.json())
            .then(updatedArtist => {
                this.props.updateArtistFromState(updatedArtist)
            })
    }
    
    

    handleDelete = (evt) => {
        fetch(`http://localhost:3000/artists/${this.props.artist.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                console.log(deletedObj);
                 this.props.deleteArtistFromState(deletedObj.id)
          })
            this.props.routerProps.history.push("/artists")
    }

   
    render(){
        console.log(this.props)
       let {name, address, songs, id} = this.props.artist
       //   let {storeName, orders, drinks, id} = this.props.store
       let {events} = this.props.artist
       console.log(events)
       return( <Segment basic>
       <Segment.Group>
                  
                <Image src= {this.props.artist.image} size = {"large"} centered ></Image>
       <h2>Artist Name: <span>{name}</span></h2>
       <p>Address:<span>{address}</span></p>
            <Segment.Group compact textAlign = "center">
                <Segment padded color="red" inverted> 
                 <Icon name="trash" onClick={this.handleDelete}></Icon>
                 </Segment>
       </Segment.Group>
                <Grid columns={2}>
                    <Grid.Column>
                    < SongsContainer 
                        songs={songs} 
                        artist_id={id} 
                        addSongToSpecificArtist={this.props.addSongToSpecificArtist}
                        deleteSongFromSpecificArtist={this.props.deleteSongFromSpecificArtist}/>
                    </Grid.Column>    
                    <Grid.Column>
                    <EventsContainer
                        events={events}
                        artist_id={id} 
                        deleteEventFromSpecificArtist={this.props.deleteEventFromSpecificArtist}
                        addEventToSpecificArtist={this.props.addEventToSpecificArtist}
                        updateEventFromState={this.props.updateEventFromState}
                        
                        
                        /> 
                        </Grid.Column>

                        </Grid>
                        </Segment.Group>
                        </Segment>           
                
    ); 
              
    } 
}

export default Artist 