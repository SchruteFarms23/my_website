import React, { Component } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import renderHTML from 'react-render-html';
import { Grid } from 'semantic-ui-react'

export default class Blogs extends Component {
  state = {
      feed: [],
      items: [],
      expanded: false
    }

  componentDidMount(){
    this.getMediumPosts()
  }

  getMediumPosts() {
   fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40romanmullady')
   .then((res) => res.json())
   .then((resJSON) => this.setState({
     feed: resJSON.feed,
     items: resJSON.items
   }))
  }

  render(){
    if (this.state.items){
      const newItems = this.state.items.map((item) => {
        return (
          <Grid.Column key={item.guid} textAlign='center' width={12} >
            <Card key={item.guid}>
              <CardHeader
                title={item.title}
                subtitle={item.pubDate}
                actAsExpander={true}
                showExpandableButton={true}
              />
            <CardText className="blog-post" expandable={true}>
                {renderHTML(item.content)}
              </CardText>
            </Card>
          </Grid.Column>
        )
      })
      return (
        <Grid centered doubling columns={1} padded>
          {newItems}
        </Grid>
      )
    } else {
      return(
        null
      )
    }
  }
}
