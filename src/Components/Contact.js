import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class Contact extends Component {
  render(){
    const iconSize = {
      fontSize: '20em',
    }
    return(
      <Grid.Row verticalAlign='top'>
        <Grid.Column width={5} verticalAlign="middle">
          <a href='https://www.medium.com/@gianpaul.r' target="_blank" rel="noopener noreferrer"><i className="fab fa-github" style={iconSize}></i></a>
        </Grid.Column>
        <Grid.Column width={5} verticalAlign="middle">
          <a href="https://github.com/grachiele" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </Grid.Column>
        <Grid.Column width={5} verticalAlign="middle">
          <a href="https://www.linkedin.com/in/gianpaul-rachiele-b8261278/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </Grid.Column>
      </Grid.Row>
    )
  }
}
