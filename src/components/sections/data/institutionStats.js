import React from 'react'
import {Header, Icon, Label, Grid} from 'semantic-ui-react'

class Institutions extends React.Component {
  render () {
      return(
        <Label ribbon color='orange'>
        <Grid relaxed='very'>
        <Grid.Column>
          <Header as='h1' inverted>
          <Header.Content style={{padding:'10%', fontSize:'25px'}}>
            400
          </Header.Content>
              <Header.Subheader>
                <Icon name='graduation cap' /> Active Institutions
              </Header.Subheader>
          </Header>
          </Grid.Column>
          </Grid>
          </Label>
      )
  }
}

export default Institutions;
