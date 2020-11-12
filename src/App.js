import React from 'react'
import './App.css'
import ArtistsContainer from './ArtistsContainer'
import Header from './Header'
import Artist from './Artist'
import Form from './Form'
import NewSongForm from './NewSongForm'
import { Route, Switch, NavLink} from 'react-router-dom'
import EventsContainer from './EventsContainer'
import SongsContainer from './SongsContainer'
import EventCalendar from './EventCalendar'
import NavBar from './NavBar'
import Studio from './Studio'

class App extends React.Component{

  state = {
    artists: []
  }


  componentDidMount(){
    fetch("http://localhost:3000/artists")
    .then(res => res.json())
    .then(arrayOfArtists => {
      this.setState({
         artists: arrayOfArtists
      })
    })
    
  }



addArtistToState = (newlyCreatedArtist) => {
  let copyOfArtists = [...this.state.artists, newlyCreatedArtist]
  this.setState({
    artists: copyOfArtists
  })
}

deleteArtistFromState = (deletedID) => {
  let copyOfArtists = this.state.artists.filter(artistObj => {
    return artistObj.id !== deletedID
  })
  this.setState({
    artists: copyOfArtists
    })
}

deleteSongFromSpecificArtist = (deletedSongID, artist_id) => {
  console.log(deletedSongID)
  let foundArtist = this.state.artists.find(artist => artist.id === artist_id)
  let copyOfSongs =foundArtist.songs.filter(songObj => {
    return songObj.id !== deletedSongID
  })
  let copyOfArtists = {...foundArtist, songs:copyOfSongs}

  this.updateArtistFromState(copyOfArtists)
}



updateArtistFromState = (updatedObj) => {
  let copyOfArtists = this.state.artists.map((artist) => {
    if(artist.id === updatedObj.id)
    {
      return updatedObj} else {
      return artist
    }
  })
  this.setState({
    artists: copyOfArtists
  })
}



    addArtistToState = (newlyCreatedArtist) => {
        let copyOfArtists = [...this.state.artists, newlyCreatedArtist]
        this.setState({
          artists: copyOfArtists
        })
    }
//fetching array of events 
addEventToSpecificArtist = (eventObj, artistID) => {
    console.log(eventObj, artistID)
    let foundArtist = this.state.artists.find(artist => artist.id === artistID)
    let copyOfEvents = [...foundArtist.events, eventObj]
  
  
    let copyOfArtists = {
      ...foundArtist, 
      events: copyOfEvents
    }

    this.updateArtistFromState(copyOfArtists)
}  
    deleteEventFromSpecificArtist = (deletedEventID, artist_id) => {
        console.log(deletedEventID)
        let foundArtist = this.state.artists.find(artist => artist.id === artist_id)
        let copyOfEvents =foundArtist.events.filter(eventObj => {
          return eventObj.id !== deletedEventID
        })
        let copyOfArtists = {...foundArtist, events:copyOfEvents}
      
        this.updateArtistFromState(copyOfArtists)
      }

      

addSongToSpecificArtist = (songObj, artistID) => {
  console.log(songObj, artistID)
  let foundArtist = this.state.artists.find(artist => artist.id === artistID)
  let copyOfSongs = [...foundArtist.songs, songObj]


  let copyOfArtists = {
    ...foundArtist, 
    songs: copyOfSongs
  }
  
  this.updateArtistFromState(copyOfArtists)
 

}

showSingleArtist = (routerProps) => {
  let id = routerProps.match.params.id
  let num_id = parseInt(id)
  let foundArtist = this.state.artists.find(artist => artist.id === num_id)

  if(foundArtist){
return <Artist 
routerProps = {routerProps}
addSongToSpecificArtist = {this.addSongToSpecificArtist}
artist={foundArtist} 
deleteArtistFromState={this.deleteArtistFromState}
deleteSongFromSpecificArtist={this.deleteSongFromSpecificArtist}
addEventToSpecificArtist={this.addEventToSpecificArtist}
deleteEventFromSpecificArtist={this.deleteEventFromSpecificArtist}/>  
  } else {
    return <p>404 Page</p>
  }
}




  render(){
    let arrayOfEvents = []
      this.state.artists.forEach(artist=>{
        arrayOfEvents = [...arrayOfEvents,...artist.events]
      })
      let arrayOfSongs= []
      this.state.artists.forEach(artist=>{
        arrayOfSongs = [...arrayOfSongs,...artist.songs]
      })
    return (
      <div className="App">
        <header className="App-header">
         < Header title="Musical Library"/>
              
          </header>
              <NavBar />
            <Switch>

              <Route path="/" exact>
              <EventCalendar events={arrayOfEvents} />
              </Route>
              <Route path="/artists/:id" render={this.showSingleArtist} />

          <Route path="/artists" exact> 
          < Form addArtistToState={this.addArtistToState} />    
            < ArtistsContainer 
            // artists={filteredArray} 
            artists={this.state.artists}
            deleteArtistFromState={this.deleteArtistFromState}
            addSongToSpecificArtist={this.addSongToSpecificArtist} 
            updateArtistFromState={this.updateArtistFromState}
            deleteSongFromSpecificArtist={this.deleteSongFromSpecificArtist}
            addEventToSpecificArtist={this.addEventToSpecificArtist}
            deleteEventFromSpecificArtist={this.deleteEventFromSpecificArtist}/>
           </Route>
           <Route path="/studios" exact>
             <Studio />
           </Route>
           <Route path="/songs" exact>
             {arrayOfSongs.map((singularSongObj)=>{
               return <iframe src={singularSongObj.link} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
             })
            }
           </Route>
           </Switch>
        </div>


    );
  }
}


export default App;
