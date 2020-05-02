import React from 'react'
import {Grid, Header, Segment, Table} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class UserProfile extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  render () {
    return(
      <Grid padded>
      <Segment>
      <Grid.Column computer={16} mobile={16} tablet={16}>   
              <Header as='h1' textAlign='center'>
                  <Header.Content>
                    Test User Name
                  </Header.Content>
              </Header>
              
              <Table unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.Cell>Side</Table.Cell>
                    <Table.Cell>Side 2</Table.Cell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Side</Table.Cell>
                    <Table.Cell>Side 2</Table.Cell>
                  </Table.Row>
                  
                  <Table.Row>
                    <Table.Cell>Side</Table.Cell>
                    <Table.Cell>Side 2</Table.Cell>
                  </Table.Row>
                  
                  <Table.Row>
                    <Table.Cell>Side</Table.Cell>
                    <Table.Cell>Side 2</Table.Cell>
                  </Table.Row>
                  
                  <Table.Row>
                    <Table.Cell>Side</Table.Cell>
                    <Table.Cell>Side 2</Table.Cell>
                  </Table.Row>
                  
                  <Table.Row>
                    <Table.Cell colSpan='2'>Side</Table.Cell>
                 
                  </Table.Row>
                </Table.Body>
              </Table>
        </Grid.Column>
        </Segment>
      </Grid>
    )
  }
}

UserProfile.propTypes = {
  is_authenticated: PropTypes.bool.isRequired
}

export default UserProfile;
