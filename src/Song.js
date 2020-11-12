import React from 'react'
import {Icon} from 'semantic-ui-react'
import {Container, Divider} from 'semantic-ui-react'

class Song extends React.Component{
   
    handleDelete = (params) => {
    console.log(this.props.song)   
    fetch (`http://localhost:3000/songs/${this.props.song.id} `,{
        method: "DELETE"
})
    .then(res => res.json())
    .then((deletedSong) =>{ 
        console.log(deletedSong)

        this.props.deleteSongFromSpecificArtist(deletedSong.id, this.props.artist_id )

    } )

}
    


    render(){
        let {title} = this.props.song
        console.log(this.props)
        return(<div>
            <li>{title}</li>
        <Icon name="x" onClick={this.handleDelete}> </Icon>
    </div>)
    }
}


export default Song