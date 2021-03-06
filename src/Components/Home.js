import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ResumeModals from './ResumeModals'

export default class Home extends Component {
  render(){
    const styles = {
      padding: '10px'
    }

    const pictureMobile = {
      paddingLeft: '20%',
      paddingRight: '20%',
      borderRadius: '80%',
    }
    return(
      <Grid stackable padded >
       <Grid.Row>
           <Grid.Column width={3}>

           </Grid.Column>
           <Grid.Column width={5} verticalAlign="middle" className="picture">
             <Image className='picture' src={require('../img/me.jpg')} height='350' style={pictureMobile} />
           </Grid.Column>
           <Grid.Column width={5} verticalAlign='middle' textAlign="left"   >
             <p>Hi, I'm a Full-Stack Web Developer with proficiency in Ruby on Rails, Javascript and React/Redux programming. After excelling at a
                computer science class during my last semester of college, I realized I enjoyed coding more than anything. Utilizing my
                creativity to leave my mark on a project really peaked my interest, and I decided to pursue this passion by enrolling and
                graduating from the Flatiron School. With strong interpersonal, communication and problem solving skills, I am also
                experienced in managing teams to deliver successful outcomes</p>
              <ResumeModals />
          </Grid.Column >
           <Grid.Column width={3}>

           </Grid.Column>
       </Grid.Row>
       <Grid.Row>

       </Grid.Row>
     </Grid>
    )
  }
}
