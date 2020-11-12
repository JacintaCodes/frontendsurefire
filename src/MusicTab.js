import React from 'react'
import SongContainer from './SongsContainer'
import Song from './Song'
import Artist from './Artist'

function MusicTab(props){
    let arrayOfComponents = props.artists.map((singularArtistObj)=>{
         return (<Song key ={singularArtistObj.id} artist = {singularArtistObj.song} centered/>
             
    )
            
    })
}

export default MusicTab