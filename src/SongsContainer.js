import React from 'react'
import NewSongForm from './NewSongForm'
import Song from './Song'
import {Container, Divider} from 'semantic-ui-react'


function SongsContainer(props){
    console.log(props)
    //displayed the songs
    let arrayOfLis = props.songs.map((song) => {
        return(<Song key={song.id}
                     song={song} 
                     artist_id={props.artist_id}
                     deleteSongFromSpecificArtist={props.deleteSongFromSpecificArtist}   />)
        
    })

    return(
     <Container> 
         <h2>Songs:</h2> 
    <ol>
<Divider/>
    {arrayOfLis}
</ol>
    < NewSongForm artist_id={props.artist_id} 
    addSongToSpecificArtist={props.addSongToSpecificArtist}
    updateArtistFromState={props.updateArtistFromState}
    deleteSongFromSpecificArtist={props.deleteSongFromSpecificArtist}/>
</Container> 
    )
}

export default SongsContainer
