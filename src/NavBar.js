import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = { activeItem: window.location.pathname };

  handleItemClick = (e, { name }) => {
    if (name === "Studios") {
      const pathName = "/studios";
      this.setState({ activeItem: pathName });
    } else if (name === "home") {
      const pathName = "/";
      this.setState({ activeItem: pathName });
    } else if (name === "Surefire Artists") {
      const pathName = "/artists";
      this.setState({ activeItem: pathName });
    } else if (name === "Music Catalog") {
      const pathName = "/songs";
      this.setState({ activeItem: pathName });
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="home"
            as={Link}
            to={"/"}
            active={activeItem === "/" ? true : false}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Surefire Artists"
            as={Link}
            to={"/artists"}
            active={activeItem === "/artists" ? true : false}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Studios"
            as={Link}
            to={"/studios"}
            active={activeItem === "/studios" ? true : false}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Music Catalog"
            as={Link}
            to={"/songs"}
            active={activeItem === "/songs" ? true : false}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

export default NavBar;
