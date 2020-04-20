import React from 'react'
import {Grid, Segment, Header} from 'semantic-ui-react'
import Instutition from './forms/institutionRegistration'
import Private from './forms/privateRegistration'
import Employee from './forms/employeeRegistration'

class Registration extends React.Component {
  constructor(){
    super()
    this.state = {
      currently_registered_private:null
    }
  }

  render () {


    return(

    <Segment style={{width:'inherit', textAlign:'left'}} className='account-background'>
        <Grid>
        <Grid.Column computer={16} tablet={16}>
            <Segment raised className='mid-segment'>
              <Grid>
                  <Grid.Column computer={10}>
                  <Header content='Institutions' as='h4' textAlign={'left'} icon='user'/>
                  <Segment raised className='account-top'>
                      <Instutition />
                  </Segment>

                  </Grid.Column>

                  <Grid.Column computer={6}>
                  <Header as='h4' content='Latest 5' icon='user' />
                      <Segment raised>
                      Newly Registered </Segment>
                  </Grid.Column>
              </Grid>
             </Segment>
        </Grid.Column>

        <Grid.Column computer={16} tablet={16}>
          <Segment raised className='mid-segment'>
              <Grid>
                <Grid.Column computer={10}>
                <Header as='h4' content='Private Training' icon='user' />
                <Segment raised className='account-top'>
                    <Private />
                  </Segment>
                </Grid.Column>

                <Grid.Column computer={6}>
                <Header as='h4' content='Private Training' icon='user' />
                    <Segment raised>
                    Newly Registered </Segment>
                </Grid.Column>
              </Grid>
            </Segment>
        </Grid.Column>

        <Grid.Column computer={16} tablet={16}>
            <Segment raised className='mid-segment'>
            <Header as='h4' content='Employee Registration' icon='user' />
                <Segment raised className='account-top'>
                    <Employee />
                </Segment>
            </Segment>
        </Grid.Column>


        </Grid>
      </Segment>
    )
  }
}

export default Registration;
