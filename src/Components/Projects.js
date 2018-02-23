import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

export default class Projects extends Component {
  render(){
    return(
      <div>
      <Segment>
      <Grid stackable padded >
        <Grid.Column  width={10}>
        <div className="video-container video-container-16x9">
                <iframe src="https://www.youtube.com/embed/76G2hrsSrss" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        </Grid.Column>

        <Grid.Column verticalAlign='middle' textAlign="left" width={5}>
        <p className="paragraph">Created an app that allows a user to check in to a local basketball park and keep track of stats. This app was created with React and Redux in the front-end and Ruby on Rails
         in the back-end with a Postgres relational database. One of my favorite projects to work on, hope you guys enjoy!</p>
        </Grid.Column>
      </Grid>
      </Segment>

      <Segment>
      <Grid stackable padded >
        <Grid.Column  width={10}>
        <div className="video-container video-container-16x9">
                <iframe src="https://www.youtube.com/embed/Z702s8HK3nc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        </Grid.Column>

        <Grid.Column verticalAlign='middle' textAlign="left" width={5}>
        <p className="paragraph">Created an app that allows a user to check in to a local basketball park and keep track of stats. This app was created with React and Redux in the front-end and Ruby on Rails
         in the back-end with a Postgres relational database. One of my favorite projects to work on, hope you guys enjoy!</p>
        </Grid.Column>
      </Grid>
      </Segment>
      </div>
    )
  }
}
