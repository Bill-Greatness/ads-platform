import React from 'react'
import {Header, Icon, Label} from 'semantic-ui-react'

class Finance extends React.Component {
  render () {
      return(
        <Label ribbon color='green'>
          <Header as='h1' inverted>
          <Header.Content style={{padding:'10%', fontSize:'25px'}}>
            400 USD
          </Header.Content>
              <Header.Subheader>
                <Icon name='gift'/> Recieved Donations
              </Header.Subheader>
          </Header>
          </Label>
      )
  }
}

export default Finance;
