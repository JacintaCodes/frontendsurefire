import React from 'react'
import Artist from './Artist'
import {Icon} from 'semantic-ui-react'

class Event extends React.Component{

    handleDelete = (params) => {
        console.log(this.props.event)   
        fetch (`http://localhost:3000/events/${this.props.event.id} `,{
            method: "DELETE"
    })
        .then(res => res.json())
        .then((deletedEvent) =>{ 
            console.log(deletedEvent)
    
            this.props.deleteEventFromSpecificArtist(deletedEvent.id, this.props.artist_id )
    
        } )
    
    }
    render(){
        console.log(this.props)
        let {name, date} = this.props.event
        return(<div>
        <li>{name}-{date}</li>
        <Icon name="x" onClick={this.handleDelete}> </Icon>
    </div>
        )
    }
}
export default Event