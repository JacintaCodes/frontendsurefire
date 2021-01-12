import React from 'react'
import { Form, Input } from 'semantic-ui-react'

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
           
             <Form>
                <Form.Field inline>
                <label>Search</label>
                 <input
                   name = "searchTerm"
                   placeholder = "Name"
                   value = {this.props.searchTerm}
                   onChange={this.handleInputChange}
                 />
                 </Form.Field>
             </Form>

          //    <Form>
          //    <Form.Field>
          //      <label>User Input</label>
          //      <input />
          //    </Form.Field>
          //  </Form>
       
         )
     }

}
export default Search