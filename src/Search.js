import React from 'react'

class Search extends React.Component{ 
    // state = {
    //   searchTerm:""
    // }

    handleInputChange = (evt) => {
      this.props.changeSearchTerm(evt)
    }

    // filter = (array) =>{
    // //  array.filter(artist => artist.name.includes("J"))
    //  return array.filter(artist => artist.name === "John Skeete")
    // }

     render(){
        
        console.log(this.props)
         return (
             <form>
                 <input
                   name = "searchTerm"
                   value = {this.props.searchTerm}
                   onChange={this.handleInputChange}
                 />
             </form>
         )
     }

}
export default Search