import React from 'react'
import {Link} from 'react-router-dom'
import {Segment, Grid, Table, Header, Icon, Label, Button} from 'semantic-ui-react'

class Schedules extends React.Component {

  render () {
    return(

    <Segment raised className='account-background'>
      <Grid>
      <Grid.Column>
      <Segment raised className='mid-segment'>
        <Header icon='clipboard list' content='Event Schedules' inverted/>
        <Grid.Column computer={16}>
        <Segment raised className='account-top'>
              <Table celled padded className='account-top'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan='6'>Training Events</Table.HeaderCell>
                    <Table.HeaderCell>
                        <Link to='/add-event'>
                        <Button circular icon>
                          <Icon name='add' color='red'/>
                        </Button>
                        </Link>
                      </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>

                    <Table.HeaderCell > Name</Table.HeaderCell>
                    <Table.HeaderCell >Location</Table.HeaderCell>
                    <Table.HeaderCell >Date</Table.HeaderCell>
                    <Table.HeaderCell >Time</Table.HeaderCell>
                    <Table.HeaderCell >Host</Table.HeaderCell>
                    <Table.HeaderCell >Description</Table.HeaderCell>
                    <Table.HeaderCell >Status</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                {[1,2,3,4,5,6,7].map(idx => (
                  <Table.Row>

                    <Table.Cell >
                      Defining The Future
                    </Table.Cell>
                    <Table.Cell>Greater Heights School (Takoradi)</Table.Cell>
                    <Table.Cell collapsing >
                      21/02/2020
                    </Table.Cell>
                    <Table.Cell collapsing >
                      10:00 AM
                    </Table.Cell>
                    <Table.Cell collapsing textAlign='right'>
                      Bill Greatness
                    </Table.Cell>
                    <Table.Cell>
                    Creatine supplementation is the reference compound for increasing
                    muscular creatine levels;
                    </Table.Cell>
                    <Table.Cell textAlign='center'>
                    <Label ribbon><Icon color='green' name='spinner' loading /></Label>

                </Table.Cell>
                  </Table.Row>
                ))}


                </Table.Body>
                </Table>
        </Segment>
        </Grid.Column>
      </Segment>

      </Grid.Column>
      </Grid>
    </Segment>
)
  }
}

export default Schedules;
