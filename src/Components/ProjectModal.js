import React from 'react'
import { Button, Grid, Header, Icon, Modal } from 'semantic-ui-react'

export default class ProjectModals extends React.Component {

  state = {
    modalOpen1: false
  }

  handleOpen1 = () => {
      this.setState({
        modalOpen1: !this.state.modalOpen1
      })
  }

  render() {
    return (
      <Grid.Column width={16} padded="horizontally">
      <Modal
        trigger={<Button basic color='black' onClick={this.handleOpen1}>Resume</Button>}
        open={this.state.modalOpen1}
        onClose={this.handleOpen1}

        >
        <Modal.Content>
          <div className="resume resume-container-16x9">
            <iframe title="Resume" src="Resume.pdf"></iframe>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.handleOpen1}>
            <Icon color='red'>Close</Icon> <Icon color='red' name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
      <a href='Resume.pdf' target="_blank" rel="noopener noreferrer"><Button basic color='black'>Resume (for mobile)</Button></a>
      </Grid.Column>
    )
  }

}
