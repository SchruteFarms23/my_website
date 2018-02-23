import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Button, Icon, Grid } from 'semantic-ui-react'

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

        <Grid.Column verticalAlign='middle' textAlign="left" width={6}>
        <p className="paragraph">Created an app that allows a user to check in to a local basketball park and keep track of their stats. This app was created with React and Redux in the front-end and Ruby on Rails
         in the back-end with a Postgres relational database. One of my favorite projects to work on. Hope you guys enjoy!</p>
         <div>
         <a href="https://github.com/SchruteFarms23/ultimate-proj-ourPark" target="_blank" rel="noopener noreferrer"><Button primary> <i className="fab fa-github fa-fw"></i>
            Frontend Github Repo <Icon name='right chevron' />
          </Button></a>

          <a href="https://github.com/SchruteFarms23/ultimate-proj-ourPark-be" target="_blank" rel="noopener noreferrer"><Button secondary> <i className="fab fa-github fa-fw"></i>
             Backend Github Repo <Icon name='right chevron' />
           </Button></a>
           </div>
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

        <Grid.Column verticalAlign='middle' textAlign="left" width={6}>
        <p className="paragraph">Created a fantasy soccer simulation app. Existing players have a salary associated with them. You can create new players with the ratings you want. Construct a fantasy soccer team under the budget,
         and pit your team in simulated matches against any other team. This app was a full MVC Ruby on Rails app with an SQLite database. One of my very first apps but also one of my favorites. </p>
         <a href="https://github.com/bother7/rails-project-mode-web-071717" target="_blank" rel="noopener noreferrer"><Button primary> <i className="fab fa-github fa-fw"></i> Github Repo <Icon name='right chevron' />
          </Button></a>
        </Grid.Column>
      </Grid>
      </Segment>
      </div>
    )
  }
}
