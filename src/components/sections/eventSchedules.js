import React from 'react'

import {AddEvent} from '../'
import {Segment, Grid, Table, Header, Icon, Label, Button, TransitionablePortal} from 'semantic-ui-react'

class Schedules extends React.Component {
  constructor(){
    super()
    this.state = {
      show_add_form:false
    }
  }

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
                        <Button circular icon onClick={() => this.setState({show_add_form:!this.state.show_add_form})}>
                          <Icon name='add' color='red'/>
                        </Button>
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
        <TransitionablePortal open={this.state.show_add_form} transition={{animation:'fly down', duration:2000}}>
            <AddEvent/>
        </TransitionablePortal>
    </Segment>
)
  }
}

export default Schedules;
