import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react'

export default class NavBar extends Component {
   state = {
     activeItem: 'home'
   }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return(
      <div>
      <Segment inverted>
        <Menu stackable inverted secondary>
           <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}  />
          <Menu.Item as={Link} to="/blogs" name='blogs' active={activeItem === 'blogs'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/projects" name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
          <h1 className="name">Roman Mulladzhanov</h1>
          <Menu.Item as={Link} to="/contact" name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} position= "right" />
        </Menu>
      </Segment>
      </div>

    )
  }
}
