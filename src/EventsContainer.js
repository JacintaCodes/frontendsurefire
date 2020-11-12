import React from 'react'
import NewEventForm from './NewEventForm'
 //import Artist from './Artist'
// import ArtistContainer from './ArtistContainer'
import Event from './Event'
import {Container, Divider} from 'semantic-ui-react'
import EventCalender from './EventCalendar'

function EventsContainer(props){
   let arrayOfLis = props.events.map((event) => {
    return(<Event key={event.id} 
            event={event}
            artist_id={props.artist_id}
            deleteEventFromSpecificArtist={props.deleteEventFromSpecificArtist} />)
})
console.log(props.artist_id)
   return(
      
<Container>
<h2>What are they here to do?</h2> 
<ol>
<Divider/>
    {arrayOfLis}
    </ol>
    <NewEventForm artist_id={props.artist_id} 
                  addEventToSpecificArtist= {props.addEventToSpecificArtist}
                  updateArtistFromState={props.updateArtistFromState}
                  deleteEventFromSpecificArtist = {props.deleteEventFromSpecificArtist}
                  />
     <EventCalender  events={props.events}/>
                  </Container>              
)}


export default EventsContainer