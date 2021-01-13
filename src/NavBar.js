import React from "react"
import {Menu, Segment} from 'semantic-ui-react'
import {Link} from "react-router-dom"

class NavBar extends React.Component{
    state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    console.log(this.state.activeItem)
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            as = {Link}
            to = {"/"}
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Surefire Artists'
            as = {Link}
            to = {"/artists"}
            active={activeItem === 'Surefire Artists'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Studios'
            as = {Link}
            to = {"/studios"}
            active={activeItem === 'Studios'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Music Catalog'
            as = {Link}
            to = {"/songs"}
            active={activeItem === 'Music Catalog'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}



export default NavBar