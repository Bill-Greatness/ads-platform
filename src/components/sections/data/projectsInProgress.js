import React from 'react'
import {Header, Icon, Label} from 'semantic-ui-react'

class ProjectsInProgress extends React.Component {
  render () {
      return(
        <Label ribbon color='red'>
          <Header as='h1' inverted>
              <Header.Content style={{padding:'10%', fontSize:'25px'}}>
                500
              </Header.Content>
              <Header.Subheader>
                  <Icon name='pin'/> Work In Progress
              </Header.Subheader>
          </Header>
          </Label>
      )
  }
}

export default ProjectsInProgress;
