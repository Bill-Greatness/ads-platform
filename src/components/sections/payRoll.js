import React from 'react'
import placeImage from '../../media/place-image.jpg'
import PayForm from './forms/payForm'
import { Grid, Segment, Item, Divider, TransitionablePortal} from 'semantic-ui-react'

const USER_PROFILE = {
  firstname:'James',
  surname:'Powell',
  employee_id:'GC00-o3Cd',
  tin_number:'SoMeRandomNum',
  department:'Training',
  basic_salary:2000,
  position:'Trainer'
}

class PayRoll extends React.Component {
  constructor(){
    super()
    this.state = {
      profile_clicked:false
    }
  }
  render () {
    return (
      <Segment style={{width:'100%', textAlign:'left'}} className='account-background'>
        <br/>
          <Divider horizontal inverted>Training Department</Divider>
          <br/>
      <Segment raised className='mid-segment'>

      <Grid divided stackable relaxed>
        {[1,2,3,4].map(idx => (
          <Grid.Column computer={4} key={idx}>
          <Item.Group >
          <Item>
              <Item.Image size='tiny' src={placeImage} />

              <Item.Content>
                <Item.Header as='a' onClick={()=> this.setState({profile_clicked:true})}>Bill Greatness</Item.Header>
                <Item.Meta>  Team Lead </Item.Meta>

              </Item.Content>
            </Item>
            </Item.Group>

          </Grid.Column>
        ))}

      </Grid>

      </Segment>


      <Segment raised className='mid-segment'>

      <Grid divided stackable relaxed>
        {[1,2,3,4].map(idx => (
          <Grid.Column computer={4} key={idx}>
          <Item.Group >
          <Item>
              <Item.Image size='tiny' src={placeImage} />

              <Item.Content>
                <Item.Header as='a'>Bill Greatness</Item.Header>
                <Item.Meta>  Team Lead </Item.Meta>

              </Item.Content>
            </Item>
            </Item.Group>

          </Grid.Column>
        ))}

      </Grid>

      </Segment>

      <br/>
      <Divider horizontal>Software Department</Divider>
      <br/>

        <Segment raised className='mid-segment'>

        <Grid divided stackable relaxed>
          {[1,2,3,4].map(idx => (
            <Grid.Column computer={4} key={idx}>
            <Item.Group >
            <Item>
                <Item.Image size='tiny' src={placeImage} />

                <Item.Content>
                  <Item.Header as='a'>Bill Greatness</Item.Header>
                  <Item.Meta>  Team Lead </Item.Meta>

                </Item.Content>
              </Item>
              </Item.Group>

            </Grid.Column>
          ))}

        </Grid>

        </Segment>

        <Segment raised className='mid-segment'>

        <Grid divided stackable relaxed>
          {[1,2,3,4].map(idx => (
            <Grid.Column computer={4} key={idx}>
            <Item.Group >
            <Item>
                <Item.Image size='tiny' src={placeImage} />

                <Item.Content>
                  <Item.Header as='a'>Bill Greatness</Item.Header>
                  <Item.Meta>  Team Lead </Item.Meta>

                </Item.Content>
              </Item>
              </Item.Group>

            </Grid.Column>
          ))}

        </Grid>

        </Segment>


        <br/>
        <Divider horizontal inverted>Graphics Department</Divider>
        <br/>

          <Segment raised className='mid-segment'>

          <Grid divided stackable relaxed>
            {[1,2,3,4].map(idx => (
              <Grid.Column computer={4} key={idx}>
              <Item.Group >
              <Item>
                  <Item.Image size='tiny' src={placeImage} />

                  <Item.Content>
                    <Item.Header as='a'>Bill Greatness</Item.Header>
                    <Item.Meta>  Team Lead </Item.Meta>

                  </Item.Content>
                </Item>
                </Item.Group>

              </Grid.Column>
            ))}

          </Grid>

          </Segment>

          <br/>
          <Divider horizontal inverted>Networking Department</Divider>
          <br/>

          <Segment raised className='mid-segment'>

          <Grid divided stackable relaxed>
            {[1,2,3,4].map(idx => (
              <Grid.Column computer={4} key={idx}>
              <Item.Group >
              <Item>
                  <Item.Image size='tiny' src={placeImage} />

                  <Item.Content>
                    <Item.Header as='a'>Bill Greatness</Item.Header>
                    <Item.Meta>  Team Lead </Item.Meta>

                  </Item.Content>
                </Item>
                </Item.Group>

              </Grid.Column>
            ))}

          </Grid>

          </Segment>

          <TransitionablePortal open={this.state.profile_clicked} transition={{animation:'fly down', duration:2000}}>
            <Segment raised style={{position:'fixed', top:'5%', left:'75%', zIndex:1000}} className='mid-segment'>
                <PayForm user={USER_PROFILE} />
            </Segment>
          </TransitionablePortal>
      </Segment>

    );

  }
}

export default PayRoll;
