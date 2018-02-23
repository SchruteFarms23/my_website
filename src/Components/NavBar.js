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

    const iconSize = {
      fontSize: '2em',
    }
    return(
      <div>
      <Segment inverted>
        <Menu stackable inverted secondary>
           <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}  />
           <Menu.Item as={Link} to="/projects" name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/blogs" name='blogs' active={activeItem === 'blogs'} onClick={this.handleItemClick} />
          <h1 className="name">Roman Mulladzhanov</h1>
          <Menu.Item position= "right">
            <a href='https://www.linkedin.com/in/roman-mulladzhanov-4270bb44/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-fw" style={iconSize}></i></a>
            <a href="https://github.com/SchruteFarms23" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-fw" style={iconSize}></i></a>
            <a href="https://medium.com/@romanmullady" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium fa-fw" style={iconSize}></i></a>
          </Menu.Item>
        </Menu>
      </Segment>
      </div>

    )
  }
}

// <Menu.Item as={Link} to="/contact" name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} position= "right" />
