import React from 'react'
import {Grid, Header, Segment, Table} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {TopNavigation } from '../'

class UserProfile extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  render () {
    return(
      <>
      {this.props.location.state === undefined || this.props.location.state.is_authenticated === false ?
      this.props.history.push({pathname:'/sign-up', state:{is_authenticated:false}}) :
      <>
      <TopNavigation is_authenticated={this.props.location.state.is_authenticated} />
      <Grid padded>
      
      <Grid.Column computer={16} mobile={16} tablet={16}>
      <Segment>
              <Header as='h1' textAlign='center'>
                  <Header.Content>
                    Test User Name
                  </Header.Content>
              </Header>
              
              <Table unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Side</Table.HeaderCell>
                    <Table.HeaderCell>Side 2</Table.HeaderCell>
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
              </Segment>
        </Grid.Column>
        
      </Grid>
      </>}
      </>
    )
  }
}

UserProfile.propTypes = {
  is_authenticated: PropTypes.bool.isRequired
}

export default UserProfile;
