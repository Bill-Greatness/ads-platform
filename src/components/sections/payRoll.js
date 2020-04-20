import React from 'react'
import placeImage from '../../media/place-image.jpg'
import { Grid, Segment, Item, Divider} from 'semantic-ui-react'

class PayRoll extends React.Component {
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

      </Segment>


    );

  }
}

export default PayRoll;
